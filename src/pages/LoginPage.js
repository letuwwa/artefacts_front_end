import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  return (
    <div className="login-input">
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter username here" />
        <input
          type="password"
          name="password"
          placeholder="Enter password here"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
