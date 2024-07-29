import { lazy } from "react";

const Main = lazy(() => import("../Pages/Main.jsx"));
const Email = lazy(() => import("../components/Emails.jsx"));
const ViewEmail = lazy(() => import("../components/ViewEmail.jsx"));

export const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Email,
  },
  invalid: {
    path: "*/",
    element: Email,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
};
