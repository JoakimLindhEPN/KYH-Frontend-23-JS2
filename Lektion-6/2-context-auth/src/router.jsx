import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./app/RootLayout";
import PublicLayout from "./app/public/PublicLayout";
import Home from "./app/public/Home";
import AuthLayout from "./app/auth/AuthLayout";
import LoginPage from "./app/auth/LoginPage";
import RegisterPage from "./app/auth/RegisterPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Home />
          }
        ]
      },



      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />
          },
          {
            path: "register",
            element: <RegisterPage />
          }
        ]
      },



      // {
      //   path: "private",
      //   element: <PrivateLayout />
      // }
    ]
  }
])