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

const entrada = ['a', 'b', 'c'];

function App() {

  const parrafos = entrada.map(elemento => {
    return (
      <div>
        <p>{elemento}</p>
      </div>
    );
  });

  const logotipo = logo;

  const mostrarImagen = true;

  // si el contador es menor a 5, imprimir un mensaje que diga
  // "El contador es menor a 5"
  // si el contador es mayor a 5, imprimir un mensaje que diga
  // "El contador es mayor a 5"
  const contador = 20;

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
      <div>
      {/* react */}
      {mostrarImagen? 
        <img src={logotipo} className="App-logo" alt="logo" /> : 
        'No hay imagen para mostrar'}

      {/* vue */}
      {/* <img v-if="mostrarImagen" src={logotipo} className="App-logo" alt="logo" />
      <span v-else>No hay imagen</span> */}
      
      {/* 
      if (contador<5) {
        alert('El contador es menor a 5'); 
      } 
      */}

        { contador === 5 && 
          <p>El contador es igual a 5</p> }
        
        { contador < 5 && 
          <p>El contador es menor a 5</p> }

        { contador > 5 && 
          <p>El contador es mayor a 5</p> }


      </div>
      <h1>Estos son los elementos:</h1>
      {parrafos}
    </div>
  );
}

export default App;
