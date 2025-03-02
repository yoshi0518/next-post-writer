type Props = { children: React.ReactNode };

export const Callout: React.FC<Props> = ({ children }) => {
  return (
    <div className="my-6 flex items-center rounded-md border border-l-4 p-4">
      <div>{children}</div>
    </div>
  );
};
