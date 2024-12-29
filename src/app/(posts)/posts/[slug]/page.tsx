import { SITE_META } from '@/constants';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Content, meta } = await import(
    `@/contents/posts/${slug}.mdx`
  );

  return (
    <div className="w-full">
      <div>
        <div className="flex gap-x-2 items-center text-sm">
          <span>公開日</span>
          <time dateTime={new Date(meta.date).toLocaleDateString('ja-JP')}>
            {new Date(meta.date).toLocaleDateString('ja-JP')}
          </time>
        </div>
        <h1 className="text-3xl font-bold mt-4 mb-12">{meta.title}</h1>
      </div>
      <Content />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: '2022-06-23-sieve-of-eratosthenes' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
}
