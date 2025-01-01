import fs from 'node:fs';
import { SITE_META } from '@/constants';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const { default: Content, meta } = await import(
    `@/contents/posts/${slug}.mdx`
  );

  return (
    <div className="w-full space-y-12 overflow-hidden">
      <div className="grid gap-y-2">
        <time
          dateTime={new Date(meta.date).toLocaleDateString('ja-JP')}
          className="flex gap-x-1 text-sm opacity-80"
        >
          <span>
            {new Date(meta.date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })}
          </span>
          <span>に公開</span>
        </time>
        <h1 className="text-3xl font-bold">{meta.title}</h1>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export const generateStaticParams = () => {
  const currentAbsolutePath = process.cwd();
  const targetPath = `${currentAbsolutePath}/src/contents/posts`;
  const files = fs.readdirSync(targetPath);
  const slugs = files.map(file => {
    return { slug: file.replace(/\.mdx$/, '') };
  });
  return slugs;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { meta } = await import(`@/contents/posts/${slug}.mdx`);

  const publishedTime = new Date(meta.date).toISOString();

  return {
    title: `${meta.title} | ${SITE_META.title}`,
    openGraph: {
      title: `${meta.title} | ${SITE_META.title}`,
      url: `${SITE_META.openGraph.url}/posts/${slug}/`,
      siteName: SITE_META.openGraph.siteName,
      locale: SITE_META.openGraph.locale,
      type: 'article',
      publishedTime,
      authors: ['yend724'],
    },
  };
};

export default Page;
