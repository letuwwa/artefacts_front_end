import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import PrivateRouter from './utils/PrivateRouter';
import ArtefactDetails from './pages/ArtefactDetails';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRouter path="/create">
            <Create />
          </PrivateRouter>
          <Route path="/artefacts/:uuid">
            <ArtefactDetails />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;