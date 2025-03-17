import { auth } from "@/auth";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserButton = async () => {
  const session = await auth();
  return (
    <Avatar>
      <AvatarImage src={session?.user?.image ?? undefined} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserButton;
