
import Navbar from "@/components/global/navbar/navbar";
import React from "react";

type props = {
  children: React.ReactNode;
};

const MainLayout = ({children}: props) => {
    return ( 
        <div>
            {/* <Navbar/> */}
            <Navbar/>
            
            {children}
        </div>
     );
}
 
export default MainLayout;
