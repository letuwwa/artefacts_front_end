import { useState } from 'react';
import AuthContext from './AuthContext'
import jwt_decode from "jwt-decode";

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(null);
    const [user, setUser] = useState(null);

    const loginUser = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/auth_api/token/", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    'username': e.target.username.value, 
                    'password': e.target.password.value
                }
            )
        });
        const data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwt_decode(data.access));
        } else {
            alert('Something went wrong!');
        }
    }

    const contextData = {
        user:user,
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
};