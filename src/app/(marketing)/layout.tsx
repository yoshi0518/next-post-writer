import type { Metadata } from 'next';
import Link from 'next/link';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { buttonVariants } from '@/components/ui/button';
import { marketingConfig } from '@/config/marketing';
import { cn } from '@/lib/utils';

type MarketingLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Marketing',
};

const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  return (
    <>
      <header className="bg-background z-40 container mx-auto">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }), 'px-4')}
            >
              ログイン
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
};

export default MarketingLayout;
