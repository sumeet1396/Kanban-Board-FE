import { ReactNode } from "react";

export interface childComponentInterface {
    children?: ReactNode;
    [x: string | number | symbol]: unknown;
}