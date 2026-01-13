import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import StatsPage from "../pages/StatsPage";
import UploadVideo from "../pages/UploadVideo";

// Layouts


export const router = createBrowserRouter([

  {
     path: "/login", element: <LoginPage /> 
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/stats", element: <StatsPage /> },
      { path: "/upload", element: <UploadVideo /> }
    ]
  },
  { path: "*", element: <PageNotFound /> }
]);