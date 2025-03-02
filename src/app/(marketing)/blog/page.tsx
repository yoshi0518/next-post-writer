import type { Post } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';

const Page: React.FC = () => {
  const posts: Post[] = allPosts as unknown as Post[];

  return (
    <div className="mx-auto max-w-4xl p-4 py-6 lg:py-10">
      <div>
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Blog</h1>
          <p className="text-muted-foreground text-xl">ContentLayerとMDXで書いています。</p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid gap-10 sm:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post._id}
            className="relative flex flex-col space-y-2"
          >
            {post.image && post.title && (
              <Image
                src={post.image}
                alt={post.title}
                width={804}
                height={452}
                className="bg-muted rounded-md border"
              />
            )}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            {post.description && <p className="text-muted-foreground>">{post.description}</p>}
            {post.date && <p className="text-muted-foreground>">{format(post.date, 'yyyy/MM/dd')}</p>}
            <Link
              href={post.slug}
              className="absolute inset-0"
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default Page;
