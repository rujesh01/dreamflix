import DreamFlixLogo from "../DreamFlixLogo";
import UserDropDown from "../UserProfile";
import SearchBar from "./Searchbar";

const Navbar = () => {
  return (
    <nav className="h-[50px] px-5 flex items-center justify-between">
      <DreamFlixLogo />
      <SearchBar />
      <UserDropDown />
    </nav>
  );
};

export default Navbar;
