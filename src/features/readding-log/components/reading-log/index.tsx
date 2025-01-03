import { getMyBooks } from '../../utils/books';

export const ReadingLog: React.FC = async () => {
  const { default: Component } = await getMyBooks();
  return (
    <div className="-my-6">
      <Component />
    </div>
  );
};
