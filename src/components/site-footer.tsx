import Link from 'next/link';
import { siteConfig } from '@/config/site';

export const SiteFooter: React.FC = () => {
  return (
    <footer>
      <div className="container mx-auto py-10 md:h-20 md:py-0">
        <p className="text-center text-sm md:text-left">
          Built by {''}
          <Link
            href={siteConfig.links.x}
            className="font-medium underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            xxxxx
          </Link>
          . Hosted on {''}
          <Link
            href="https://vercel.com"
            className="font-medium underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
};
