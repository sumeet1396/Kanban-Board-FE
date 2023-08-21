import { ReactNode } from "react";

export interface childComponentInterface {
    children?: ReactNode;
    [x: string | number | symbol]: unknown;
}

export interface formFieldsInterface {
    title?: string;
    image?: string;
    address?: string;
    description?: string;
    email?: string;
    phone?: string;
    userName?: string;
    password?: string;
    captchaText?: string;
    userCode?: string;
    groupCode?: string;
    [x: string | number | symbol]: unknown;
}

export interface loginInterface {
    payload: {
        username: string;
        password: string;
        enabled: boolean;
        callback: () => void;
    }
    type: string;
}
