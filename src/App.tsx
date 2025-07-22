// filepath: /F:/coding/frontend/IoT-Admin-Panel/src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Layout from "./components/commons/Layout";
import Devices from "./components/IoTDeviceTable";
import Home from "./pages/home";
// import AllDevices from "./components/AllDevices";
// import SendMessage from "./components/SendMessage";
// import Settings from "./components/Settings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
