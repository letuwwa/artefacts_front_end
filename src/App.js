import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Create from './pages/Create';
import NotFound from './pages/NotFound';
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
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/artefacts/:uuid">
            <ArtefactDetails />
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