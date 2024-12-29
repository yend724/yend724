export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Content, meta } = await import(`@/posts/${slug}.mdx`);

  return (
    <div className="w-full">
      <div>
        <div className="flex gap-x-2 items-center text-sm">
          <span>公開日:</span>
          <span>{meta.date}</span>
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
