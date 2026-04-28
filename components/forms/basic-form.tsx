"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { userSchema, UserFormValues } from "@/lib/schema/user.schema";
import { Button } from "../ui/button";
import FormGroup from "../ui/form-group";
import { Label } from "../ui/label";
import { PasswordInput } from "../ui/password-input";
import { useState } from "react";

export default function BasicForm() {
  const [isLoading, setIsLoading] = useState(false);
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
  const values = watch();
  const isFormEmpty = !values.firstName && !values.lastName && !values.email && !values.password;
  console.log("Errors:", errors);
  const onSubmit = async (data: UserFormValues) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s delay
    console.log(data);
    setIsLoading(false);
  };
  return (
    <form
      className="space-y-4 w-md"
      onSubmit={handleSubmit(onSubmit)}
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
          autoComplete="off"
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
      <Button type="submit" className="w-full p-3 cursor-pointer" isLoading={isLoading} disabled={isLoading || isFormEmpty}>
        Submit
      </Button>
    </form>
  );
}
