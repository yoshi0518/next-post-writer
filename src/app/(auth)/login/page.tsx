import Link from 'next/link';
import { UserAuthForm } from '@/components/user-auth-form';

const Page: React.FC = () => {
  return (
    <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground text-sm">メールアドレスを入力してログインできます。</p>
        </div>

        <UserAuthForm />

        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link
            href="/register"
            className="underline underline-offset-4"
          >
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;
