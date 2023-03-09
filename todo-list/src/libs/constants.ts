import React from "react";
import { IContextNote } from "../types/types";

export const KEY_NOTES = "notes";
export const BODY_PROPERTY = "body";
export const STATUS_PROPERTY = "status";

export const CONTEXT = React.createContext({} as IContextNote);
