import { AppSidebar } from "@/components/global/app-sidebar";
import Navbar from "@/components/global/navbar/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import React from "react";

type props = {
  children: React.ReactNode;
};

const MainLayout = async ({ children }: props) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="w-screen">
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
