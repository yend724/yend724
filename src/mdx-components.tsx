import type { MDXComponents } from 'mdx/types';
import { Link } from '@/components/link';
import { CodeBlock } from '@/components/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1
        id={children.toString()}
        className="mb-8 mt-12 flex gap-x-2 text-3xl font-bold"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">#</span>
          <span>{children}</span>
        </Link>
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={children.toString()}
        className="flex text-2xl font-bold mb-8 mt-12 gap-x-2"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">##</span>
          <span>{children}</span>
        </Link>
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children.toString()}
        className="mb-8 mt-12 flex gap-x-2 text-xl font-bold"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">###</span>
          <span>{children}</span>
        </Link>
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={children.toString()}
        className="mb-8 mt-12 flex gap-x-2 text-lg font-bold"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">####</span>
          <span>{children}</span>
        </Link>
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        id={children.toString()}
        className="mb-8 mt-12 flex gap-x-2 text-base font-bold"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">#####</span>
          <span>{children}</span>
        </Link>
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        id={children.toString()}
        className="mb-8 mt-12 flex gap-x-2 text-base font-bold"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">######</span>
          <span>{children}</span>
        </Link>
      </h6>
    ),
    p: props => <p className="my-6 break-all text-base" {...props} />,
    ul: props => (
      <ul className="my-6 list-inside list-disc pl-8 -indent-8" {...props} />
    ),
    ol: props => (
      <ol className="my-6 list-inside list-decimal pl-8 -indent-8" {...props} />
    ),
    li: props => <li className="my-2 text-base" {...props} />,
    pre: ({ children }) => {
      const [language] = children.props.className?.split(':') ?? [''];
      const formattedLanguage = language.replace('language-', '');
      return (
        <CodeBlock lang={formattedLanguage}>
          {children.props.children}
        </CodeBlock>
      );
    },
    code: props => (
      <code
        className="mx-1 break-all rounded-sm bg-neutral-200 px-1 text-base text-neutral-700"
        {...props}
      />
    ),
    a: props => (
      <Link
        className="text-sky-700 underline hover:no-underline dark:text-sky-400"
        {...props}
      />
    ),
  };
}
