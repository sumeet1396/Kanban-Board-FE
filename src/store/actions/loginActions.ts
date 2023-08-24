import { createAction } from "@reduxjs/toolkit";
import { USER_LOGIN, USER_SIGNUP } from "../../constants/action-constants";

const login = createAction<{ username: string; password: string, enabled: boolean, callback: () => void }>(USER_LOGIN)
const signUp = createAction<any>(USER_SIGNUP)

export {
    login,
    signUp
}