import z from "zod";

export const userSchema = z.object({
  firstName: z.string()
    .min(1, "First name is required")
    .min(3, "First name must be at least 3 characters"),
  lastName: z.string()
    .min(1, "Last name is required"),
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email"),
  password: z.string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type UserFormValues = z.infer<typeof userSchema>;