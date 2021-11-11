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
  Route
} from 'react-router-dom';

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
        </Routes>
      </Router>


    </div>
  );
}

export default App;