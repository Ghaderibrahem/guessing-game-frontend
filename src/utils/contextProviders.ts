import { createContext, useContext } from "react";
import { TAppContext } from "./types";

export const AppContext = createContext<TAppContext | null>(null);

export function useAppContext() {
  return useContext(AppContext);
}
