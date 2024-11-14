import { createContext, useState } from "react";


export const AuthContext = createContext(null as AuthContextType | null);


export const AuthContextProvider = ({ children }: any) => {


    const [isLogin, setisLogin] = useState(false)


    const login = () => {
        setisLogin(true);
    }

    const logout = () => {
        setisLogin(false);
    }


    return <AuthContext.Provider value={{ isLogin, login, logout }}>
        {children}
    </AuthContext.Provider>

}





export type AuthContextType = {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
}