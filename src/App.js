import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import PrivateRouter from './utils/PrivateRouter';
import ArtefactDetails from './pages/ArtefactDetails';
import { AuthProvider } from './context/AuthProvider';
import ArcheologistsList from './components/ArcheologistsList';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
        <AuthProvider>
          <div className="App">
            <Navbar />
            <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/archeologists">
                <ArcheologistsList />
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
      </AuthProvider>
    </Router>
  );
}

export default App;