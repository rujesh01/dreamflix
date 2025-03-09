import { AvatarImage } from "@radix-ui/react-avatar";
import Logo from "../logo";
import { Avatar, AvatarFallback } from "../ui/avatar";

const Navbar = async () => {

  return (
    <nav className="h-[60px] px-4 flex items-center justify-between ">
      <Logo />
      <h1>this is navbar</h1>

      <div>
        <Avatar>
          <AvatarImage src={""} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Navbar;
