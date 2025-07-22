import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/commons/Layout.tsx";
import SidebarMenu from "./components/SidebarMenu/index.tsx";
import { DashboardProvider } from "./context/DashboardContext";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
