"use server";

import { LoginSchema } from "@/schemas";
import { error } from "console";
import * as z from "zod";

async function Login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }

  return { success: "Email sent!" };
}

export default Login;
