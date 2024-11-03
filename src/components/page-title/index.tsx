type Props = {
  title: string;
  description: string;
};
export const PageTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-left font-semibold text-xl text-wrap text-black dark:text-white">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
};
