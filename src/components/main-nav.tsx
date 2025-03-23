'use client';

import type { NavItem } from 'types';
import { useState } from 'react';
import Link from 'next/link';
import { MobileNav } from '@/components/mobile-nav';

type Props = {
  items: NavItem[];
  children?: React.ReactNode;
};

export const MainNav: React.FC<Props> = ({ items }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => setShowMobileMenu((prev) => !prev);

  return (
    <div className="flex items-center md:gap-10">
      <Link
        href="/"
        className="hidden items-center space-x-2 md:flex"
      >
        <span className="hidden font-bold sm:inline-block">Post Writer</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        {items.map((item) => (
          <Link
            key={item.title}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        className="md:hidden"
        onClick={handleClick}
      >
        <span>メニュー</span>
      </button>
      {showMobileMenu && <MobileNav items={items} />}
    </div>
  );
};
