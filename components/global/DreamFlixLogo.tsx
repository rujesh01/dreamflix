import Link from "next/link";

const DreamFlixLogo = () => {
  return (
    <Link href={"/home"}>
      <div className="flex items-center space-x-2">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-destructive-foreground">
          DreamFlix
        </span>
      </div>
    </Link>
  );
};

export default DreamFlixLogo;
