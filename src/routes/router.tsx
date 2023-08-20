import { Dashboard, Login, Signup, ForgetPassword } from "../Pages";
import ProtectedRoutes from "./ProtectedRoutes";

const routes = [
    {
        path: '/',
        element: (
            <ProtectedRoutes>
                <Dashboard />
            </ProtectedRoutes>
        )
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: 'forgot-password',
        element: <ForgetPassword />
    }
];

export default routes