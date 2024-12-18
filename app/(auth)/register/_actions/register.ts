"use server";
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

export default async function register(FormData: FormData) {
  const name = FormData.get("name") as string;
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;

  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios");
  }

  const user = await db.user.findUnique({
    where: { email },
  });

  if (user) {
    throw new Error("Usuário já existe");
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashSync(password),
    },
  });

  redirect("/login");
}
