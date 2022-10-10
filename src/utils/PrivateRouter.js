import { Redirect, Route } from 'react-router-dom';

const PrivateRouter = ({children, ...rest}) => {
    console.log("test private router");
    const isAuthenticated = false
    return ( 
        <Route {...rest}>
            {!isAuthenticated ? <Redirect to="/login"/> : children}
        </Route>
     );
}
 
export default PrivateRouter;