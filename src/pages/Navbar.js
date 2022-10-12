import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    let {user} = useContext(AuthContext);
    return ( 
        <nav className="navbar">
            <h1>Artefacts</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Artefact</Link>
                {user ? (
                    <Link to="/login">Logout</Link>
                ): (
                    <Link to="/login">Login</Link>
                )}
            </div>
            { user && <p><strong>Hi, {user.username}</strong></p>}
        </nav>
     );
}
 
export default Navbar;