import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import appRouter from "./src/App.js";   // ✅ import router

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
// Wrap your application with RouterProvider and pass the router
// This will enable routing in your application