import type { NavItem } from '@/types';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

type Props = {
  items: NavItem[];
  children?: React.ReactNode;
};

export const MobileNav: React.FC<Props> = ({ items }) => {
  return (
    <div className="animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 p-6 shadow-md md:hidden">
      <div className="bg-popover text-popover-foreground grid gap-6 p-4 shadow-md">
        <Link
          href="/"
          className="font-bold"
        >
          {siteConfig.name}
        </Link>
        <nav className="flex gap-4 text-sm">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
