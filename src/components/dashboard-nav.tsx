'use client';

import type { SidebarNavItem } from 'types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon as Icons } from '@/components/icon';

type DashboardNavProps = {
  items: SidebarNavItem[];
};

export const DashboardNav = ({ items }: DashboardNavProps) => {
  const pathname = usePathname();

  if (!items) return null;
  return (
    <nav>
      {items.map((item, index) => {
        const Icon = Icons[item.icon ?? 'arrowRight'];

        return (
          <Link
            href={item.href!}
            key={index}
          >
            <span
              className={`hover:bg-accent text-accent-foreground flex items-center rounded-md px-3 py-2 text-sm font-medium ${pathname === item.href ? 'bg-accent' : 'bg-transparent'}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {item.title}
            </span>
          </Link>
        );
      })}
    </nav>
  );
};
