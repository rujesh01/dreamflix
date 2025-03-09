
type Props = {
  children: React.ReactNode;
};

const HomePageLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      {children}
    </div>
  );
};

export default HomePageLayout;
