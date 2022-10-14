import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    let {user, logoutUser} = useContext(AuthContext);
    return ( 
        <nav className="navbar">
            <h1>Artefacts</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/archeologists">Test</Link>
                <Link to="/create">New Artefact</Link>
            </div>
            { user && <p><strong>Hi, {user.username}</strong></p>}
            {user ? (
                    <button onClick={logoutUser}>Logout</button>
                ): (
                    <Link to="/login">Login</Link>
                )}
        </nav>
     );
}
 
export default Navbar;