import { jwtDecode } from "jwt-decode";
import { createContext } from "react";

export const UserContext = createContext(null);

export const userDecodeToken = (userToken) => {
    const decoded = jwtDecode(userToken)
    return {role: decoded.role, nome: decoded.nome, token: userToken}
}