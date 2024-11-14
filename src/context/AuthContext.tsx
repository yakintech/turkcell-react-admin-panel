import { createContext, useEffect, useState } from "react";
import { baseService } from "../api/baseService";
import { axiosInstance } from "../api/axiosInstance";


export const AuthContext = createContext(null as AuthContextType | null);


export const AuthContextProvider = ({ children }: any) => {


    const [isLogin, setisLogin] = useState(false)
    const [loading, setloading] = useState(true)


    useEffect(() => {

        baseService.getAll("check")
            .then((response) => {
                setisLogin(true)
                setloading(false)
            })
            .catch((error) => {
                //burada 401 alıyorsam token artık geçersizdir ve refreshtoken a ihtiyacım var
                if (error.response.status == 401) {
                    baseService.add("auth/refresh-token", {})
                        .then((response) => {
                            setisLogin(true)
                        })
                        .catch((error) => {
                            setisLogin(false)
                        })
                }

                setisLogin(false)
                setloading(false)
            })

    }, [])


    const login = () => {
        setisLogin(true);
    }

    const logout = () => {
        baseService.add("auth/logout", {})
            .then((response) => {
                setisLogin(false)
            })
            .catch((error) => {
                setisLogin(false)
            })
    }


    return <AuthContext.Provider value={{ isLogin, login, logout, loading }}>
        {children}
    </AuthContext.Provider>

}





export type AuthContextType = {
    isLogin: boolean;
    login: () => void;
    logout: () => void;
    loading: boolean;
}