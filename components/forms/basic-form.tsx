"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { userSchema, UserFormValues } from "@/lib/schema/user.schema";
import { Button } from "../ui/button";
import FormGroup from "../ui/form-group";
import { Label } from "../ui/label";
import { PasswordInput } from "../ui/password-input";

export default function BasicForm() {
  const {
    register,
    formState: { errors },
    control,
    watch,
    handleSubmit,
    reset,
  } = useForm<UserFormValues>({
    defaultValues: { firstName: "", lastName: "", email: "" },
    resolver: zodResolver(userSchema),
  });
  console.log("Errors:", errors);
  return (
      <form
        className="space-y-4 w-md"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <FormGroup>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            placeholder="First Name"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Last Name"
            {...register("lastName")}
            error={errors.lastName?.message}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </FormGroup>

         <FormGroup>
          <Label htmlFor="password">Password</Label>
          <PasswordInput
            id="password"
            placeholder="Password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />
        </FormGroup>
        <Button type="submit" className="w-full p-6 cursor-pointer">Submit</Button>
      </form>

  );
}
