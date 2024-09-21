import NextAuth, { AuthError, CredentialsSignin, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInFormSchema } from "@/types/index";
import prisma from "@/lib/db";
import { z } from "zod";

// Custom Error class for authentication errors
class CustomAuthError extends CredentialsSignin {
    code = "Something went wrong while authenticating";
    constructor(message?: string) {
        super(message);
        if (message) {
            this.code = message;
        }
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: { email: { type: "email" }, password: { type: "password" } },
            authorize: async (credentials) => {
                console.log("credentials", credentials);

                // Validate credentials if necessary (commented out here)
                // const validationResult = signInFormSchema.safeParse(credentials);

                const dbUser = await prisma.user.findUnique({
                    where: {
                        email: `${credentials?.email}`,
                    },
                });

                console.log("user", dbUser);

                if (!dbUser) {
                    throw new CustomAuthError("No such email found");
                }

                if (dbUser.password !== credentials.password) {
                    throw new CustomAuthError("Password is incorrect");
                }

                // Extend user object to match expected User type
                const user: User = {
                    id: dbUser.id.toString(),
                    name: dbUser.name,
                    email: dbUser.email,
                    image: null,  // Assuming there's no image, you can modify it as needed
                };

                return user;
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        // used when session in server is created
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;  // Assign the user ID
            }
            return token;
        },
        // used when client useSession is called
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.id as string;  // Pass token's ID to session
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",  // Custom login page
    },
});
