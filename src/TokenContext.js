import { createContext, useContext } from "react";

export const TokenContext = createContext(null);

export const useToken = () => useContext(TokenContext);
