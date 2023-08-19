import { Navigate } from "react-router-dom";
import { childComponentInterface } from "../types/interface";

const ProtectedRoutes = ({children}: childComponentInterface) => {
    const token = null;
    if (!token) return <Navigate to="/login" />

    return children
}

export default ProtectedRoutes;
