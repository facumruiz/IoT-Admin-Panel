import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./components/commons/Layout";
import SettingsView from "./components/SettingsView";
import Dashboard from "./components/Dashboard";
import SendMessageView from "./components/SendMessage/SendMessageView";
import Logout from "./components/LogOut";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },

    {
      path: "/last-messages",
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },

    {
      path: "/all-devices",
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },

    {
      path: "/settings",
      element: (
        <Layout>
          <SettingsView />
        </Layout>
      ),
    },

    {
      path: "/send-message",
      element: (
        <Layout>
          <SendMessageView />;
        </Layout>
      ),
    },

    {
      path: "/logout",
      element: (
        <Layout>
          <Logout />;
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
