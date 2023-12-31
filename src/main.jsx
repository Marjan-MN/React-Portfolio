import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "project",
        element: <ProjectPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "Resume",
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
