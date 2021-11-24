import { React, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import bgConsulta from '../resources/bg-consulta.png'

export default function ModuloConsulta() {
  const{
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const petitionRequest = () => {
    <div className="consulta">
      <img src={bgConsulta} alt="consulta"/>
    </div>
  }

  return (
    <div className="request d-flex flex-wrap">
      <div className="row">
        <div className="text-white text-center col-lg-4 text-consulta"><p>Ingresa el número de boleto y los últimos 5 dígitos del código de validación que aparece en tu ticket de <b>TuQuintico.</b></p></div>
        <div className="text-white col-lg-4">
          <div className="input-group mb-3 justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
              <p className="mini-text padd">Número de boleto</p>

              <input {...register("NumeroBoleto", { required: true, maxLength: 16 ,pattern: /^\d+$/g })} className="form-control" type="text" placeholder="Número de boleto"/>

              {errors.NumeroBoleto?.type === 'pattern' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo ingrese números</p>}
              {errors.NumeroBoleto?.type === 'required' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Este campo es requerido</p>}

              <div className="spacing"><p className="mini-text">Último 5 dígitos del serial</p>

              <input {...register("Serial", { required: true, maxLength: 5, minLength: 5, pattern: /^\d+$/g })} className="form-control" type="text" placeholder="Serial"/></div>

              {errors.Serial?.type === 'pattern' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo ingrese números</p>}
              {errors.Serial?.type === 'maxLength'  && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo 5 números</p>}
              {errors.Serial?.type === 'minLength'  && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Solo 5 números</p>}
              {errors.Serial?.type === 'required' && <p className="errortext"><i className="fas fa-exclamation-circle"></i> Este campo es requerido</p>}

              <div className="spacing"><button className="btn btn-success submitbtn" type="submit">Enviar</button></div>
              </label>
            </form>
          </div>
        </div>
        <div className="text-white text-center col-lg-4 text-consulta"><p><b>Recuerda: <br/></b>Realizamos nuestros sorteos todos los sábados a las 7:45PM.</p></div>
      </div>
    </div>
  )
}
