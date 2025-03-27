// import Link from 'next/link';
import { DashboardNav } from '@/components/dashboard-nav';
import { MainNav } from '@/components/main-nav';
import { SiteFooter } from '@/components/site-footer';
import { dashboardConfig } from '@/config/dashboard';

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="bg-background sticky top-9 z-40 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <div className="container my-4 grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
};

export default DashboardLayout;
