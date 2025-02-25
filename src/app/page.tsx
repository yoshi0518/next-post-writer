import type { FC } from 'react';
import { Button } from '@/components/ui/button';

const Home: FC = () => {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <Button>Shadcn Button</Button>
        </div>
      </div>
    </main>
  );
};
export default Home;
