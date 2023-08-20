import { createAction } from "@reduxjs/toolkit";
import { USER_LOGIN } from "../../constants/action-constants";

const login = createAction<{ username: string; password: string }>(USER_LOGIN)

export {
    login
}