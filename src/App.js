import React from 'react';
import Logo from './resources/head/Group-1.png';
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
      <div className="container position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-12">
            <h1>El lugar donde intentas acceder no existe</h1>
          </div>
            <div className="col-12 spacing">
              <img src={Logo} className="logoQ" alt="LOGO TQ"/>
            </div>
            <div className="col-12 spacing">
              <Link to="/"><button className="btn btn-danger">Regresar a la pagina de inicio</button></Link>
            </div>
        </div>
      </div>
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