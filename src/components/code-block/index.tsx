import type { BundledLanguage } from 'shiki';
import { codeToHtml } from 'shiki';

type Props = {
  children: string;
  lang: BundledLanguage;
};
export const CodeBlock: React.FC<Props> = async props => {
  const code = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'github-dark-default',
  });

  return (
    <div className="relative text-sm">
      <span className="absolute text-xs right-1 top-1 opacity-50">
        {props.lang}
      </span>
      <div dangerouslySetInnerHTML={{ __html: code }} />
    </div>
  );
};
