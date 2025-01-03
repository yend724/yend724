import { SITE_META } from '@/constants';
import { isProd } from '@/utils/env';
import { getPosts, getPost } from '@/utils/posts';

const MDX_EXTENSION = '.mdx';
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const { default: Component, meta } = await getPost(`${slug}${MDX_EXTENSION}`);

  return (
    <div className="w-full space-y-12 overflow-hidden">
      <div className="grid gap-y-2">
        <time
          dateTime={new Date(meta.date).toLocaleDateString('ja-JP', {
            timeZone: 'Asia/Tokyo',
          })}
          className="flex gap-x-1 text-sm opacity-80"
        >
          <span>
            {new Date(meta.date).toLocaleDateString('ja-JP', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              timeZone: 'Asia/Tokyo',
            })}
          </span>
          <span>に公開</span>
        </time>
        <h1 className="text-3xl font-bold">{meta.title}</h1>
      </div>
      <div>
        <Component />
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const isFiltering = isProd();
  const posts = await getPosts();
  const slugs = posts
    .filter(post => (isFiltering ? !post.meta.draft : true))
    .map(post => ({
      slug: post.slug,
    }));
  return slugs;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { meta } = await getPost(`${slug}${MDX_EXTENSION}`);
  const publishedTime = new Date(meta.date).toISOString();

  return {
    title: `${meta.title} | ${SITE_META.title}`,
    openGraph: {
      title: `${meta.title} | ${SITE_META.title}`,
      url: `${SITE_META.openGraph.url}/posts/${slug}/`,
      siteName: SITE_META.openGraph.siteName,
      locale: SITE_META.openGraph.locale,
      images: SITE_META.openGraph.images,
      type: 'article',
      publishedTime,
      authors: ['yend724'],
    },
    twitter: {
      card: 'summary_large_image',
    },
  };
};

export default Page;
