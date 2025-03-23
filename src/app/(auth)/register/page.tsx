import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from '@/components/user-auth-form';
import { cn } from '@/lib/utils';

const Page: React.FC = () => {
  return (
    <div className="container mx-auto grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={(cn(buttonVariants({ variant: 'ghost' })), 'md-left-8 absolute left-4 md:top-8')}
      >
        ログイン
      </Link>
      <div className="bg-muted hidden h-full lg:block" />
      <div className="mx-auto w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">アカウントの作成</h1>
          <p className="text-muted-foreground text-sm">メールアドレスを入力してアカウント作成してください。</p>
        </div>

        <UserAuthForm />

        <p className="text-muted-foreground px-8 text-center text-sm">
          続けてクリックすれば私たちの
          <Link
            href="/terms"
            className="underline underline-offset-4"
          >
            利用規約
          </Link>
          と
          <Link
            href="/privacy"
            className="underline underline-offset-4"
          >
            プライバシーポリシー
          </Link>
          に同意したことになります。
        </p>
      </div>
    </div>
  );
};

export default Page;
