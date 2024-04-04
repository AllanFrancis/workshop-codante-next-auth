'use server';

import { signIn } from "@/auth";



export default async function githubLogin(FormData: FormData) {
  
  await signIn('github')
}
