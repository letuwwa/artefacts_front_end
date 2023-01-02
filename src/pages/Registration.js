import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Registration = () => {
  const notify = () => toast("User has been saved!");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const artefact = {
      username: username,
      email: email,
      first_name: firstName,
      last_name: lastName,
      password: password,
    };
    setLoading(true);
    fetch("http://localhost:8000/auth_api/register/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(artefact),
    }).then(() => {
      notify();
      console.log("data added");
      setLoading(false);
      history.push("/login");
    });
  };

  return (
    <div className="user-create">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Your email:</label>
        <textarea
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></textarea>
        <label>First name:</label>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last name:</label>
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLoading && <button>Sign Up!</button>}
        {isLoading && <button disabled>Loading...</button>}
      </form>
    </div>
  );
};

export default Registration;
