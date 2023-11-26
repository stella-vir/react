import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> <br>
            </br>
            You have what it takes, seek opportunities and you will find them. <br>
            </br>
          all the knowledges belong to people.
        </p>
        <a
          className="App-link"
          href="https://wikipedia.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>
      </header>
    </div>
  );
}

export default App;
