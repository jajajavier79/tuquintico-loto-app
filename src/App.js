import React from 'react';
import Navigation from './components/navigation';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/contact';
import FormPay from './pages/FormPay';
import Ticket from './pages/Ticket';
import TicketConsulta from './pages/TicketConsult';
import Register from './pages/register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function NoMatch(){
  return(
    <div className="NotFound">
      <h1>El lugar donde intentas acceder no existe</h1>
      <Link to="/"><a>Regresar a la pagina de inicio</a></Link>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/ticket' element={<Ticket/>}/>
          <Route path='/FormPay' element={<FormPay/>}/>
          <Route path='/TicketConsulta' element={<TicketConsulta/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;