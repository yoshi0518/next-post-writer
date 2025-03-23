'use client';

import { useState } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { signIn } from 'next-auth/react';

import { Icon } from './icon';

export const UserAuthForm: React.FC = () => {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);

  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
            />
          </div>
          <Button
            type="submit"
            className={cn(buttonVariants)}
          >
            メールアドレスでログイン
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground bg-background px-2">または</span>
        </div>
      </div>
      <button
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={async () => {
          setIsGithubLoading(true);
          await signIn('github');
        }}
        disabled={isGithubLoading}
      >
        {isGithubLoading ? <Icon.spinner className="mr-[-6px] animate-spin" /> : <Icon.github className="mr-[-6px]" />}
        Github
      </button>

      <button
        className={cn(buttonVariants({ variant: 'outline' }))}
        onClick={async () => {
          setIsGoogleLoading(true);
          await signIn('google');
        }}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? <Icon.spinner className="mr-[-6px] animate-spin" /> : <Icon.google className="mr-[-6px]" />}
        Google
      </button>
    </div>
  );
};
