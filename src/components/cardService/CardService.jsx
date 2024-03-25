import React from 'react';
import "./cardService.css";
import { BsCheckLg } from "react-icons/bs";

const CardService = ({ service }) => {
    // console.log(service.title)
    return (
        <div className='content-cards'>
            <div className="card-service">
                <div className='description-service'>
                    <h2 className='title-service'>{service.title}</h2>
                    <p className='description-service'>{service.description}</p>
                </div>
                <div className="divider"></div>
                <div className='specifications-service'>
                    <ul>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.dominio}</h4>
                        </li>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.certificado}</h4>
                        </li>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.secciones}</h4>
                        </li>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.ubicacion}</h4>
                        </li>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.responsive}</h4>
                        </li>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.contacto}</h4>
                        </li>
                        <li className='list-specifications'>
                            <BsCheckLg />
                            <h4>{service.hosting}</h4>
                        </li>
                        <li>
                          <button className='button-solicitar'>Solicitar</button>
                        </li>
                    </ul>
                    
                   
                </div>
                
                
            </div>
        </div>
    )
}

export default CardService