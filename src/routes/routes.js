import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/CHeckout/Checkout";
import Contact from "../components/Contact/Contact";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import FAQ from "../components/FAQ/FAQ";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Pdf from "../components/Pdf/Pdf";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import SingleCourse from "../components/SingleCourse/SingleCourse";
import ThankYouPage from "../components/ThankYouPage/ThankYouPage";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Main from "../Utilities/Main";
import PriveteRoute from "./PrivateRoute/PriveteRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-10-server-beta.vercel.app/home-course')
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
                loader: () => fetch('https://assignment-10-server-beta.vercel.app/blog'),
                element: <FAQ></FAQ>
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://assignment-10-server-beta.vercel.app/courses/${params.id}`),
                element: <SingleCourse></SingleCourse>
            },
            {
                path: '/thank-you',
                element: <PriveteRoute><ThankYouPage></ThankYouPage></PriveteRoute>
            },
            {
                path: '/checkout',
                element: <PriveteRoute><Checkout></Checkout></PriveteRoute>
            },
            {
                path: '/profile',
                element: <PriveteRoute><Profile></Profile></PriveteRoute>
            },
            {
                path: 'update-profile',
                element: <PriveteRoute><UpdateProfile></UpdateProfile></PriveteRoute>
            },
            {
                path: '/pdf',
                element: <Pdf></Pdf>
            }
        ]
    }
])