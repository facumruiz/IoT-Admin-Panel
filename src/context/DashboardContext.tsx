import React, { createContext, useContext, useState } from "react";

interface UseMessagesParams {
  sensorType?: string;
  deviceName?: string;
  topic?: string;
  timestampFrom?: string;
  timestampTo?: string;
  page?: number;
  limit?: number;
}

interface DashboardContextProps {
  activeView: string;
  setActiveView: (view: string) => void;
  filters: UseMessagesParams;
  setFilters: (filters: UseMessagesParams) => void;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined
);

interface DashboardProviderProps {
  children: React.ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({
  children,
}) => {
  const [activeView, setActiveView] = useState("last-messages");
  const [filters, setFilters] = useState<UseMessagesParams>({
    page: 1,
    limit: 10,
  });

  return (
    <DashboardContext.Provider
      value={{ activeView, setActiveView, filters, setFilters }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within DashboardProvider"
    );
  }
  return context;
};
