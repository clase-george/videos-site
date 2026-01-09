import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import PageNotFound from "../pages/PageNotFound";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";

// Layouts


export const router = createBrowserRouter([

  {
     path: "/login", element: <LoginPage /> 
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
    ]
  },
  { path: "*", element: <PageNotFound /> }
]);