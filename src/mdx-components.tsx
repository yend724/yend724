import type { MDXComponents } from 'mdx/types';
import { Link } from '@/components/link';
import { CodeBlock } from '@/components/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => (
      <h1
        id={children.toString()}
        className="flex text-3xl font-bold mb-8 mt-12 gap-x-2"
      >
        <span className="text-neutral-400">#</span>
        <span>{children}</span>
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={children.toString()}
        className="text-2xl font-bold mb-8 mt-12"
      >
        <Link className="flex gap-x-2" href={`#${children.toString()}`}><span className="text-neutral-400">##</span>
        <span>{children}</span></Link>
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        id={children.toString()}
        className="flex text-xl font-bold mb-8 mt-12 gap-x-2"
      >
        <span className="text-neutral-400">##</span>
        <span>{children}</span>
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        id={children.toString()}
        className="flex text-lg font-bold mb-8 mt-12 gap-x-2"
      >
        <span className="text-neutral-400">###</span>
        <span>{children}</span>
      </h4>
    ),
    h5: ({ children }) => (
      <h5
        id={children.toString()}
        className="flex text-base font-bold mb-8 mt-12 gap-x-2"
      >
        <span className="text-neutral-400">#####</span>
        <span>{children}</span>
      </h5>
    ),
    h6: ({ children }) => (
      <h6
        id={children.toString()}
        className="flex text-base font-bold mb-8 mt-12 gap-x-2"
      >
        <span className="text-neutral-400">######</span>
        <span>{children}</span>
      </h6>
    ),
    p: props => <p className="text-base my-6 break-all" {...props} />,
    ul: props => (
      <ul className="list-disc list-inside my-6 pl-8 -indent-8" {...props} />
    ),
    ol: props => (
      <ol className="list-decimal list-inside my-6 pl-8 -indent-8" {...props} />
    ),
    li: props => <li className="text-base my-2" {...props} />,
    pre: ({ children }) => {
      const [language, _] = children.props.className?.split(':') ?? [''];
      const formattedLanguage = language.replace('language-', '');
      return (
        <CodeBlock lang={formattedLanguage}>
          {children.props.children}
        </CodeBlock>
      );
    },
    code: props => (
      <code
        className="text-base bg-neutral-200 text-neutral-700 px-1 break-all rounded-sm mx-1"
        {...props}
      />
    ),
    a: props => (
      <Link
        className="text-sky-700 dark:text-sky-400 underline hover:no-underline"
        {...props}
      />
    ),
  };
}
