import logo from './logo.svg';
import './App.css';

// #1 components son funciones que retornan HTML
// #2 recordar los paréntesis
// #3 clases de CSS van con className
// #4 referencias a JS van dentro de llaves { }
// #5 esas llaves sustituyen el v-bind o las {{}} de Vue

function HelloWorld() {
  const nombre = 'Jose Pablo';
  return (
    <div>
      <h1>Hello {nombre}</h1>
    </div>
  );
}

function App() {

  const logotipo = logo;
  const nombre = "Hello World";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logotipo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      <HelloWorld />
    </div>
  );
}

export default App;
