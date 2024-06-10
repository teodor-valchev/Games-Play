import * as request from "../../lib/request.js";

const base_url = `${import.meta.env.VITE_API_URL}/users`;

export const login = (userData) => {
    const result =  request.post(`${base_url}/login`, userData);

    return result
};

export const register = (email, password) => {
    const userData = {
        email,
        password,
    };
    const result = request.post(`${base_url}/register`, userData);

    return result;
};

export const logout = async () => {

    const result = await request.get(`${base_url}/logout`);
    return result
};


