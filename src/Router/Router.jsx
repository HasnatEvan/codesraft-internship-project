import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/ContactPage/Contact";
import Blog from "../Pages/BlogPage/Blog";
import BlogDetails from "../Pages/BlogPage/BlogDetails";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/blog/:id',
                element:<BlogDetails></BlogDetails>
            }
        ]
    },
]);