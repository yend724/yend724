import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h2: props => <h2 className="text-2xl font-bold my-8" {...props} />,
    h3: props => <h3 className="text-xl font-bold my-8" {...props} />,
    h4: props => <h4 className="text-lg font-bold my-8" {...props} />,
    h5: props => <h5 className="text-base font-bold my-8" {...props} />,
    h6: props => <h6 className="text-base font-bold my-8" {...props} />,
    p: props => <p className="text-base my-4 break-all" {...props} />,
    ul: props => (
      <ul className="list-disc list-inside pl-8 -indent-8" {...props} />
    ),
    ol: props => (
      <ol className="list-decimal list-inside  pl-8 -indent-8" {...props} />
    ),
    li: props => <li className="text-base my-2" {...props} />,
    pre: props => (
      <pre
        className="text-base bg-slate-900 p-4 rounded overflow-auto"
        {...props}
      />
    ),
    code: props => (
      <code
        className="text-base bg-slate-900 px-1 break-all rounded-sm"
        {...props}
      />
    ),
  };
}
