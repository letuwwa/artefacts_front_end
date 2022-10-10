const LoginPage = () => {
    return ( 
        <div className="login-input">
            <form>
                <input 
                    type="text"
                    name="username"
                    placeholder="Enter username here"
                />
                <input 
                    type="password"
                    name="password"
                    placeholder="Enter password here"
                />
                <input 
                    type="submit"
                />
            </form>
        </div>
     );
}
 
export default LoginPage;