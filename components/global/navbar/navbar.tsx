import { SidebarTrigger } from "@/components/ui/sidebar";
import DreamFlixLogo from "../DreamFlixLogo";
import UserDropDown from "../UserProfile";
import SearchBar from "./Searchbar";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex gap-3 items-center justify-between w-full px-5 py-3 border-b-2 border-solid bg-white dark:bg-slate-900">
      <div className="flex items-center gap-1">
        <SidebarTrigger />
        <DreamFlixLogo />
      </div>

      <div className="flex-1  max-w-xl ">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
