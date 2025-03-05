import { LogOut } from "@/actions/login";
import { auth } from "@/auth";
import LogOutButton from "@/components/auth/logout";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      {JSON.stringify(session)}
      <h1>this is </h1>
      <LogOutButton />
    </div>
  );
}
