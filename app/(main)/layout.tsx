import Navbar from "@/components/global/navbar/page";
import React from "react";

type props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
