import { React, useEffect, useState } from 'react'
import { fetchResuts } from '../services/api'
import date from '../services/date'
import banner from '../resources/tq-banner-1-100.png'
import bottom from '../resources/banner/border-bot.png'
import ligadito from '../resources/4-100.png'
import R1 from '../resources/Recurso 50.1.png'
import R2 from '../resources/Recurso 50.png'
import R3 from '../resources/Recurso 51.png'
import R4 from '../resources/Recurso 52.png'
import R5 from '../resources/Recurso 53.png'
import R6 from '../resources/Recurso 54.png'

export default function Home() {
  const [NextDraws, setNextDraws] = useState(null);
  const [PrevDraws, setPrevDraws] = useState([]);
  const [responseData, setResponseData] = useState({result:{numero:'',signo:''}});
  const [combination, setCombination] = useState([]);
  const [existResult, setExistResult] = useState(false);

  const getResult = async (fecha) => {
    const result = await fetchResuts(fecha);
    setNextDraws(result.next.fecha_juega)
    setPrevDraws(result.prev_draws)
    setResponseData(result)
    setCombination(result.result.numero.split(''))
    setExistResult(true);
  }

  const getUrlImage = (numero,type) => {
    if (type === 'N') return `/img/balls/${numero}.png`
    return `/img/signs/${numero}.png`
    
  }

  useEffect(()=>{
    if(!existResult) getResult(date(6)); // Last saturday
  },[existResult])

    return (
    <div className="home">
      <section className="main-section">
        <div className="container-xl">
            <img className="w-100" src={banner} alt="Sorteo todos los sabados"/>
            <img className="w-100" src={bottom} alt="Sorteo todos los sabados"/>
        </div>
        <div className="container-xl">
              <div className="row">
                  <div className="col-5">
                      <p className="newusertext">¿Eres nuevo usuario? <a className="newusertext" href="/register"> Registrate y personaliza tu ticket aquí.</a></p>
                  </div>
                  <div className="col-7">
                      <div className="icons">
                          <a href="https://wa.me/+5841XXXXXXXX"><i className="fab fa-whatsapp"></i></a>
                          <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                          <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                          <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
              <hr/>
          </div>
          <div className="container-xl">
          <div className="row g-0">
            <div className="d-flex col-md-2 col-4 col-6">
              <p className = "text">Sorteo: {PrevDraws[0]}</p>
            </div>
            <div className="d-flex col-md-5 col-6 justify-content-end text-end">
              <p className="text">Proximo Sorteo: {NextDraws}</p>
            </div>
            <div className="d-flex col-md-5 col-12 justify-content-end">
              <div className="btn-group">
                <div className="dropdown">
                  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                      Sorteos Anteriores
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {PrevDraws.map((index, i) => (
                      <li> <button obj={index} key={i} className="dropdown-item" type="button" onClick={()=>{getResult(PrevDraws[i])}}>{PrevDraws[i]}</button></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="results-section">
        <div className="spacing w-100">
          <div className="bg container-xl d-flex justify-content-evenly flex-wrap">
            {combination.map((numero, index) => (
              <img key={index} src={process.env.PUBLIC_URL + getUrlImage(numero, 'N')} className="imagen col-xs-2 justify-content-center" alt={numero} />
            ))}
              {<img src={process.env.PUBLIC_URL + getUrlImage(responseData.result.signo, 'S')} className="imagen col-xs-2 justify-content-center" alt="Signo" />}
            </div>
        </div>

        {/* add ticket/request ticket section will stay here */}
        </section>

        <div className="container-xl ligadito">
          <a><img className="w-100 large-spacing" src={ligadito} alt="Ligadito"/></a>
          <hr className="large-spacing"/>
        </div>

        <section className="social-media spacing">
          <div className="container-xl">
              <div className="col-12">
                  <div className="infotext">
                      <p className="text">Para mayor información contáctenos a través de nuestros números</p>
                  </div>
              </div>
          </div>
          <div className="container-xl">
              <div className="col-12">
                  <div className="infotext">
                      <p className="text"><i className="fas fa-phone"></i> +58 261-79758004</p> 
                  </div>
                  <div className="infotext">
                      <p className="text"><i className="fab fa-whatsapp"></i> +58 414-2258580</p>
                  </div>
                  <div className="infotext">
                      <p className="text">O a través de nuestras <b>redes sociales</b></p>
                  </div>
              </div>
          </div>
          <div className="container-xl">
              <div className="col-12">
                  <div className="iconsfinal">
                      <a href="https://wa.me/+5841XXXXXXXX"><i className="fab fa-whatsapp"></i></a>
                      <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                      <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                      <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                      <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                  </div>
              </div>
          </div>
        </section>

        <footer>
          <div className="footer-copy-redes"> 
            <div className="main-copy-redes">
              <div className="footer-copy">
					      <p className="text">© 2017 SUPERJUEGOS.COM.VE: Todos los derechos reservados
                <br/>Prohibida la venta y comercialización de estos productos a niños, niñas y adolescentes menores a 16 años de edad.</p>
              </div>
            </div>
            <div className="container-xl">
              <div className="footer-images">
                <div className="col-md-2 col-4">
                  <img src={R1}/>
                </div>
                <div className="col-md-2 col-4">
                  <a><img src={R4}/></a>
                </div>
                <div className="col-md-2 col-4">
                  <a><img src={R3}/></a>
                </div>
                <div className="col-md-2 col-4">
                  <a><img src={R2}/></a>
                </div>
                <div className="col-md-2 col-4">
                  <a><img src={R5}/></a>
                </div>
                <div className="col-md-2 col-4">
                  <a><img src={R6}/></a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}