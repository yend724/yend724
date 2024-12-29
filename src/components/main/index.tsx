type Props = {
  children: React.ReactNode;
};
export const Main: React.FC<Props> = ({ children }) => {
  return (
    <main className="mx-auto block w-full max-w-5xl overflow-hidden">
      {children}
    </main>
  );
};
