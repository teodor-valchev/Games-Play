import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../components/services/authService";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = usePersistedState("auth", {});

    const navigate = useNavigate();
    useContext(AuthContext);

    const loginSubmitHandler = async (values) => {
        try {
            const user = await authService.login(values);

            if (!user) {
                throw new Error("Wrong Input");
            }

            setAuth(user);
            navigate(Path.Home);
        } catch (error) {
            navigate('/login')
        }
    };

    const registerSubmitHandler = async (values) => {
        try {
            const user = await authService.register(
                values.email,
                values.password
            );

            if (!user) {
                throw new Error("Wrong Input");
            }

            setAuth(user);
            navigate(Path.Home);
        } catch (error) {
            navigate("/register");
        }
    };

    const logoutHandler = () => {
        setAuth("", {});
        localStorage.clear();
        navigate(Path.Home);
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        isAuth: !!auth.accessToken,
        user: auth._id || "guest",
        username: auth.email || "guest",
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
