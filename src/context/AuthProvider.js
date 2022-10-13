import { useState } from 'react';
import AuthContext from './AuthContext'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

export const AuthProvider = ({ children }) => {
    let [authTokens, setAuthTokens] = useState(
        () => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    );
    let [user, setUser] = useState(
        () => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null
    );

    const history = useHistory();

    let loginUser = async (e) => {
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
            console.log(authTokens);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authTokens', JSON.stringify(data));
            history.push('/');
        } else {
            alert('Something went wrong!');
        }
    }
    
    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        history.push('/login')
    }

    const contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
    }
     

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
};