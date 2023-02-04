import logo from './logo.svg';
import './App.css';
//import { Hello } from "./components/Hello";
//import { Counter } from "./components/Counter";
import SumForm from "./components/Suma";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SumForm />
      </header>
    </div>
  );
}

