import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./routers/Router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ParallaxProvider } from "react-scroll-parallax";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import ThemeProvider from "./provider/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ParallaxProvider>
          <HelmetProvider>
            <Toaster />
            <ThemeProvider>
              <RouterProvider router={router} />
            </ThemeProvider>
          </HelmetProvider>
        </ParallaxProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
