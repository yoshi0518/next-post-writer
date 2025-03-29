'use client';

import type { VariantProps } from 'class-variance-authority';
import { useState } from 'react';
import { cn } from '@/lib/utils';

import { Icon } from './icon';
import { Button, buttonVariants } from './ui/button';

export const PostCreateButton = ({
  className,
  variant,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => setIsLoading((prev) => !prev);

  return (
    <Button
      className={(cn(buttonVariants({ variant })), { 'cursor-not-allowed opacity-60': isLoading }, className)}
      onClick={handleClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Icon.spinner className="mr-2 h-4 w-4 animate-spin" /> : <Icon.add className="mr-2 h-4 w-4" />}
      新しい投稿
    </Button>
  );
};
