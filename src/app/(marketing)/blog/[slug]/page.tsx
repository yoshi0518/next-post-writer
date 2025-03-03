import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx-component';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';

type Props = {
  params: Promise<{ slug: string }>;
};

const getPostFromSlug = async (slug: string) => {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const post = await getPostFromSlug(slug);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  };
};

const Page: React.FC<Props> = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostFromSlug(slug);

  if (!post) notFound();

  // console.log({ post });

  return (
    <article className="container mx-auto max-w-3xl px-4 py-6 lg:py-10">
      <div>
        {post.date && <time>Published on {format(post.date, 'yyyy/MM/dd')}</time>}
        <h1 className="mt-2 text-4xl leading-tight font-extrabold lg:text-5xl">{post.title}</h1>
      </div>
      {post.image && post.title && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="bg-muted my-8 rounded-md border"
        />
      )}
      {/* <div>{post.body.html}</div> */}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="py-6 text-center">
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          すべての記事を見る
        </Link>
      </div>
    </article>
  );
};

export default Page;
