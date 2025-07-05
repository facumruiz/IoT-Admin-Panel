import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
