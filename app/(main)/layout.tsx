import Navbar from "@/components/GlobalNavbar/navbar";
import React from "react";

type props = {
    children: React.ReactNode
}

const MainLayout = ({children}: props) => {
    return ( 
        <div>
            <Navbar/>
            
            {children}
        </div>
     );
}
 
export default MainLayout;