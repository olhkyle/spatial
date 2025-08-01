"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "@/components/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui";

export default function LoginForm() {
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className="flex flex-col my-4 space-y-4"
      >
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="me@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg">
          Login
        </Button>
      </form>
    </Form>
  );
}
