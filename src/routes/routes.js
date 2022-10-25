import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import Main from "../Utilities/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-beta.vercel.app/courses'),

            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-beta.vercel.app/courses')

            },

            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://assignment-10-server-beta.vercel.app/blog')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/single-course',
                element: <SingleCourse></SingleCourse>
            }
        ]
    }
])