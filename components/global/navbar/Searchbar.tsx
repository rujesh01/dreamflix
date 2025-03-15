import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <div>
      <Input
        placeholder="Search....."
        className="w-full"
      />
    </div>
  );
};

export default SearchBar;
