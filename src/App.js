import { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Hello } from "./components/Hello";
//import { Counter } from "./components/Counter";
import SumForm from "./components/Suma";

export function App() {
  // 1. Variables que se necesiten
  const [users, setUsers] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    edad: ""
  });
  const [sended, setSended] = useState(false);

  // 2. useEffect
  useEffect(() => {
    setFormData({nombre: "", edad: ""});

    // Una forma de hacer la funcion async
  //   async function fetchData() {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await  res.json();
  //     setUsers(data);
  //   }
  //   fetchData();
  // });

    // Otra forma de hacer la funcion async, más moderna y clara
    (async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    })();
    // esta es una función sin nombre entonces se llama con el () posterior y se ejecuta
  }, [sended]);


  // Funciones y eventos
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value });
  }

  // Funciones y eventos
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSended(true);
    alert(`Hola ${formData.nombre}, tienes ${formData.edad}`);
  };
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Formulario - Clase 3</p>
        <form onSubmit={handleSubmit}>
          <input name="nombre" type="text" value={formData.nombre} onChange={handleChange} placeholder="Nombre"/>
          <input name="edad" type="number" value={formData.edad} onChange={handleChange} placeholder="Edad"/>
          <button type="submit">Enviar</button>
        </form>
        <p>Contador - Clase 2</p>
        <SumForm />
        <p>Ejemplo llamada a API - Clase 3</p>
        <ul>
          {users?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
      </ul>
      </header>

    </div>
  );
}

