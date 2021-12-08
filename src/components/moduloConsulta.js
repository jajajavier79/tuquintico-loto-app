import { React, useState } from 'react'
import { useForm } from "react-hook-form"
import { FetchRewards } from '../services/consultAPI'
import Parser from 'html-react-parser'

export default function ModuloConsulta() {
  
  const [Ticket, setTicket] = useState('');
  const [Message, setMessage] = useState('');
  const [Rewards, setRewards] = useState([]);
  const [showTicket, setShowTicket] = useState(false);

  const getData = async (ID, Serial) => {
    try{
      const res = await FetchRewards(ID, Serial)
      console.log('%c Ticket has been found Successfully. Status: 200 ', 'background: #28a745; color: #fff')
        setMessage('¡FELICIDADES!');
        setRewards(res.data.premios[0].detalle);
        setTicket(res.data.ticket.ticket.replace(/\n|\r|\\n/g, '<br/>'));
        setShowTicket(true);
    }
    catch (err){
      console.error("404: Ticket not found")
    }
  }

  const{
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => getData(data.id, data.Serial);

  const Results = () => (
    <div className="container-xl backimg">
      <div className="row centercard">
      <div className="card justify-content-center spacing">
        <div className="card-body ticketprint">
          {Parser(Ticket)}
        </div>
      </div>
        <div className="spacing col-12 text-white">
          <p className="bodyticket">{Message}</p>
        </div>
        <div className="col-12 text-white">
          <p className="bodyticket">Has acertado {Rewards}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="container-xl">
      <div className="request d-flex flex-wrap">
        <div className="row">
          <div className="text-white text-center col-lg-4 text-consulta"><p>Ingresa el número de boleto y los últimos 5 dígitos del código de validación que aparece en tu ticket de <b>TuQuintico.</b></p></div>
          <div className="text-white col-lg-4">
            <div className="input-group mb-3 justify-content-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                <p className="mini-text padd">Número de boleto</p>

                <input {...register("id", { required: true, maxLength: 16, pattern: /^\d+$/g })} className="form-control" type="text" placeholder="Número de boleto"/>

                {errors.id?.type === 'pattern' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo ingrese números</p>}
                {errors.id?.type === 'required' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Este campo es requerido</p>}

                <div className="spacing"><p className="mini-text">Último 5 dígitos del serial</p>

                <input {...register("Serial", { required: true, maxLength: 5, minLength: 5, pattern: /^\w+$/g })} className="form-control" type="text" placeholder="Serial"/></div>

                {errors.Serial?.type === 'pattern' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo ingrese números y letras</p>}
                {errors.Serial?.type === 'maxLength' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo 5 números</p>}
                {errors.Serial?.type === 'minLength' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo 5 números</p>} 
                {errors.Serial?.type === 'required' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Este campo es requerido</p>}
                
                <div className="spacing">
                <button className="btn btn-success submitbtn" type="submit">
                  Enviar
                </button>
                </div>
                </label>
              </form>
            </div>
          </div>
          <div className="text-white text-center col-lg-4 text-consulta"><p><b>Recuerda: <br/></b>Realizamos nuestros sorteos todos los sábados a las 7:45PM.</p></div>
        </div>
      </div>
      {showTicket == true ? <Results/> : null}
    </div>
  )
}
