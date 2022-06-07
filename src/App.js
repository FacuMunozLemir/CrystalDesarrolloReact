import logo from "./logo.svg";
import "./App.css";
import NavBar from "./componentes/NavBar/NavBar";
import Main from "./componentes/Main/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Main />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido a mi app</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
