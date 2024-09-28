import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, EyeIcon } from "lucide-react";

export default function Component() {
  return (
    <form className="w-full  mx-auto space-y-6 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold">My informations</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" placeholder="aksh" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" placeholder="sekhr" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthdate">Birthdate</Label>
          <div className="relative">
            <Input id="birthdate" placeholder="dd-mm-yyyy" />
            <CalendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <p className="text-sm text-blue-500">
            A surprise awaits you on your birthday!
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            placeholder="akshsekhr1102@gmail.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">New password</Label>
          <div className="relative">
            <Input id="password" type="password" />
            <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500">
            Your password must contain at least 5 characters
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="repeatPassword">Repeat password</Label>
          <div className="relative">
            <Input id="repeatPassword" type="password" />
            <EyeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </form>
  );
}
