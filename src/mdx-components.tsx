import type { MDXComponents } from 'mdx/types';
import { Link } from '@/components/link';
import { CodeBlock } from '@/components/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1 id={children.toString()} className="mb-8 mt-12 text-3xl font-bold">
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">#</span>
          <span>{children}</span>
        </Link>
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={children.toString()} className="mb-8 mt-12 text-2xl font-bold">
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">##</span>
          <span>{children}</span>
        </Link>
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={children.toString()} className="mb-8 mt-12 text-xl font-bold">
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">###</span>
          <span>{children}</span>
        </Link>
      </h3>
    ),
    h4: ({ children }) => (
      <h4 id={children.toString()} className="mb-8 mt-12 text-lg font-bold">
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">####</span>
          <span>{children}</span>
        </Link>
      </h4>
    ),
    h5: ({ children }) => (
      <h5 id={children.toString()} className="mb-8 mt-12 text-base font-bold">
        <Link className="flex gap-x-2" href={`#${children.toString()}`}>
          <span className="text-neutral-400">#####</span>
          <span>{children}</span>
        </Link>
      </h5>
    ),
    h6: ({ children }) => (
      <h6 id={children.toString()} className="mb-8 mt-12 text-base font-bold">
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
    li: props => <li className="my-2 flex flex-wrap text-base" {...props} />,
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
      <Link className="text-sky-400 underline hover:no-underline" {...props} />
    ),
    table: props => <table className="my-6" {...props} />,
    thead: props => (
      <thead className="sticky top-0 bg-neutral-800" {...props} />
    ),
    th: props => (
      <th
        className="text-nowrap py-2 text-start [&:not(:first-of-type)]:pl-4"
        {...props}
      />
    ),
    td: props => (
      <td className="py-2 align-top [&:not(:first-of-type)]:pl-4" {...props} />
    ),
    hr: props => (
      <hr className="my-6 border-t border-neutral-200 opacity-80" {...props} />
    ),
    blockquote: props => (
      <blockquote
        className="my-6 border-l-4 border-neutral-200 pl-4 opacity-80"
        {...props}
      />
    ),
  };
}
