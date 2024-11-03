type Props = {
  title: string;
  description: string;
};
export const PageTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-wrap text-left text-2xl font-semibold text-black dark:text-white">
        {title}
      </h1>
      <p className="text-base">{description}</p>
    </div>
  );
};
