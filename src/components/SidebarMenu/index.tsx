import React, { useState } from "react";
import {
  MessageSquare,
  Cpu,
  Send,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import SensorDashboard from "../Messages/index";
import { useNavigate } from "react-router-dom";

// Sidebar Component
interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const SidebarMenu: React.FC<SidebarProps> = ({ activeView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      id: "last-messages",
      label: "Last Messages",
      icon: MessageSquare,
    },
    {
      id: "all-devices",
      label: "All Devices",
      icon: Cpu,
    },
    {
      id: "send-message",
      label: "Send a Message",
      icon: Send,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
    {
      id: "logout",
      label: "Logout",
      icon: LogOut,
    },
  ];

  const handleItemClick = (itemId: string) => {
    onViewChange(itemId);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } transition-all duration-300 ease-in-out flex flex-col h-screen`}
      style={{
        background: "linear-gradient(180deg, #0F160A 0%, #577C38 100%)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-600">
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } text-white font-bold text-xl`}
        >
          IoT Dashboard
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors text-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeView === item.id;
            const isLogout = item.id === "logout";

            return (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-3 rounded-lg
                    transition-all duration-200 text-left
                    ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }
                    ${
                      isActive
                        ? "shadow-lg"
                        : "hover:bg-white hover:bg-opacity-10"
                    }
                    ${isLogout ? "mt-8" : ""}
                  `}
                  style={{
                    backgroundColor: isActive ? "#27391C" : "transparent",
                    border: isActive
                      ? "1px solid #2DD843"
                      : "1px solid transparent",
                  }}
                >
                  <IconComponent
                    size={20}
                    style={{
                      color: isActive ? "#2DD843" : "currentColor",
                      minWidth: "20px",
                    }}
                  />
                  <span
                    className={`${
                      isOpen ? "opacity-100" : "opacity-0 w-0"
                    } transition-all duration-300 font-medium whitespace-nowrap overflow-hidden`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } p-4 border-t border-gray-600`}
      >
        <div className="text-gray-400 text-sm">
          <div className="font-semibold text-white">System Status</div>
          <div className="flex items-center gap-2 mt-1">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#2DD843" }}
            ></div>
            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
