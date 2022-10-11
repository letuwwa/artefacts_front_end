import AuthContext from './AuthContext'

export const AuthProvider = ({ children }) => {
    return (
    <AuthContext.Provider 
        value={{ "name": "admin" }}>{children}
    </AuthContext.Provider>
    )
};