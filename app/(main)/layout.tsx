import React from "react";

type props = {
    children: React.ReactNode
}

const MainLayout = ({children}: props) => {
    return ( 
        <div>
            <nav>nav bar</nav>
            
            {children}
        </div>
     );
}
 
export default MainLayout;