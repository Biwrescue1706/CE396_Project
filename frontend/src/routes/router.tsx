// src/routes/router.tsx
import HomePage from "@/pages/Homes/index";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CategoriesPage from "@/pages/category";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/categories",
                element: <CategoriesPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
