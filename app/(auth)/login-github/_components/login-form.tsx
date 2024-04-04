'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import login from '../_actions/githubLogin';
import githubLogin from '../_actions/githubLogin';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com seu Github</CardDescription>
      </CardHeader>
      <CardContent>
        {' '}
        <form action={githubLogin} className="text-left ">
          <Button size={'lg'} type="submit" className="w-full mt-10 flex gap-3 ">
            <SiGithub />
            Login com Github
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
