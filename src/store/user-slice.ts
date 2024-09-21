import { User } from "@prisma/client";
import { StateCreator } from "zustand";

export type UserState = {
    user: User[]
    address: string;
}

export type UserActions = {
    setAddress: (address: string) => void
}

export type UserSlice = UserState & UserActions;

export const createUserSlice: StateCreator<UserSlice, [['zustand/immer', never]], [], UserSlice> = (set) => ({
    user: [

    ],
    address: '',

    setAddress: (address) => set((state) => {
        state.address = address
    })
})