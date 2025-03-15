import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {

  
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
