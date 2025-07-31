import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../SidebarMenu";
import { useDashboardContext } from "../../context/DashboardContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { activeView, setActiveView } = useDashboardContext();
  return (
    <div className="flex h-screen w-screen">
      <SidebarMenu activeView={activeView} onViewChange={setActiveView} />

      <div className="flex-1">{children}</div>
      <Outlet />
    </div>
  );
};

export default Layout;
