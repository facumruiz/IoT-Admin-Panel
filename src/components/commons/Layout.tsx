import React from "react";
import SidebarMenu from "../SidebarMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen">
      <SidebarMenu />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
