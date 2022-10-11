import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
    let {name} = useContext(AuthContext)
    return ( 
        <nav className="navbar">
            <h1>Artefacts</h1>
            <div className="links">
                <Link to="/">Hi, {name}</Link>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/create">New Artefact</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;