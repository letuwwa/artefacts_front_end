import './App.css';

function App() {
  const title = 'Artefacts'
  const githubLink = "https://github.com/letuwwa/artefacts_api" 
  return (
    <div className="App">
      <div className="content">
        <h1><a href={ githubLink }>{ title }</a></h1>
      </div>
    </div>
  );
}

export default App;
