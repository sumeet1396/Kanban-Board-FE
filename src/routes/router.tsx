import { Dashboard, Login, Signup } from "../Pages";
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
    }
];

export default routes