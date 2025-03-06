"use client";

import { LogOut } from "@/actions/auth/login";
import { Button } from "../ui/button";

const LogOutButton = () => {
  const handleLogout = async () => {
    await LogOut(); // Calls the server function properly
  };
  return (
    <div>
      <Button onClick={handleLogout}>Sign Out</Button>
    </div>
  );
};

export default LogOutButton;
