import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ServiceAll from "../Pages/Home/Services/ServiceAll";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails";
import ProtectedRoute from "./ProtectedRoute";
import MyReviews from "../Pages/MyReviews/MyReviews";
import AddService from "../Pages/AddService/AddService";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/serviceAll',
                element: <ServiceAll></ServiceAll>,
                loader: () => fetch('http://localhost:5000/serviceAll')
            },
            {
                path: 'services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <ProtectedRoute><MyReviews></MyReviews></ProtectedRoute>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/addservice',
                element: <ProtectedRoute><AddService></AddService></ProtectedRoute>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
])
export default router;