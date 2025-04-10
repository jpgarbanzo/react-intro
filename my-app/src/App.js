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

const opcionesMenu = [ { 
    id: 1, texto: 'Code', link: '/', isSelected: false
  }, { 
    id: 2, texto: 'Issues', link: '/issues', isSelected: true
  }, { 
    id: 3, texto: 'Pull-requests', link: '/pulls', isSelected: false
  }];

function App() {
  const actualizarSeleccion = (id = null) => {
    console.log('click en el elemento', id);
  };

  // mostrar todos los elementos del menú
  // agregar id, poner el link como href
  // si está seleccionado, poner un *
  const menu = opcionesMenu.map(elemento => {
    return (
      <a 
        href={`#${elemento.link}`}
        key={elemento.id} 
        style={{ margin: '10px' }} 
        onClick={actualizarSeleccion.bind(this, elemento.id)}>
        { elemento.texto }
        { elemento.isSelected && (<b>*</b>) }
      </a>
    );
  });







  
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


      <h1>Estos son los elementos del menú:</h1>
      {menu}
    </div>
  );
}

export default App;
