import { Navigate } from "react-router-dom";
import { childComponentInterface } from "../types/interface";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({children}: childComponentInterface) => {
    const token = useSelector((state: any) => state?.login?.token ?? '');
    console.log({token})
    if (!token) return <Navigate to="/login" />

    return children
}

export default ProtectedRoutes;
