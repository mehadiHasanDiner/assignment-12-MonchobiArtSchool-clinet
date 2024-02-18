import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </ParallaxProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
