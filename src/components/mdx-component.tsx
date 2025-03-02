'use client';

import Image from 'next/image';
import { Callout } from '@/components/callout';
import { useMDXComponent } from 'next-contentlayer2/hooks';

const components = {
  Image,
  Callout,
};

type Props = {
  code: string;
};

export const Mdx: React.FC<Props> = ({ code }) => {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
};
