import Link from "next/link";
import { Button } from "./ui/button";

const Logo = () => {
  return (
    <>
      <Button className="font-black text-2xl" variant={"link"} asChild>
        <Link href="/home">
        DreamFlix
        </Link>
      </Button>
    </>
  );
};

export default Logo;
