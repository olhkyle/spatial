import { z } from "zod";

type LoginSchema = z.infer<typeof loginSchema>;

const loginSchema = z.object({
  email: z.email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(1, { message: "Password cannot be blank" })
    .regex(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{7,15}$/, {
      message: `Write correct password format`,
    }),
});

export type { LoginSchema };
export { loginSchema };
