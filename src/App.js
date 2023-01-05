import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';
import Fcontact from './components/pure/Fcontact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componenete propio Greeting.jsx 
        <Greeting name="Juan"></Greeting>
        
        {/* Componente de ejemplo funcional */}
        {/*<GreetingF name="Juan Cruz"></GreetingF>*/}
        {/* Componente de Listado de Tareas */}
        <TaskListComponent></TaskListComponent>

        {/* Componente de Listado de Contactos */}
        <ContactListComponent></ContactListComponent>
        <Fcontact name="Juan Cruz" lastname="Crotta" email="juan@gmail.com"></Fcontact>
      </header>
    </div>
  );
}

export default App;
