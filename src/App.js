import logo from './bumi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          aware and save the earth
        </p>
        <a
          className="App-link"
          href="https://science.nasa.gov/earth/facts"
          target="_blank"
          rel="noopener noreferrer"
        >
          earth
        </a>
      </header>
    </div>
  );
}

export default App;
