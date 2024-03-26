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
                            {service.dominio && <BsCheckLg />}
                            <h4 className='items-ervice'>{service.dominio}</h4>
                        </li>
                        <li className='list-specifications'>
                            {service.certificado && <BsCheckLg />}
                            <h4 className='items-ervice'>{service.certificado}</h4>
                        </li>
                        {service.secciones && (
                            <li className='list-specifications'>
                                <BsCheckLg />
                                <h4 className='items-ervice'>{service.secciones}</h4>
                            </li>
                        )}
                        <li className='list-specifications'>
                            {service.ubicacion && <BsCheckLg />}
                            <h4 className='items-ervice'>{service.ubicacion}</h4>
                        </li>
                        <li className='list-specifications'>
                            {service.responsive && <BsCheckLg />}
                            <h4 className='items-ervice'>{service.responsive}</h4>
                        </li>
                        <li className='list-specifications'>
                            {service.contacto && <BsCheckLg />}
                            <h4 className='items-ervice'>{service.contacto}</h4>
                        </li>
                        <li className='list-specifications'>
                            {service.hosting && <BsCheckLg />}
                            <h4 className='items-ervice'>{service.hosting}</h4>
                        </li>
                        <li>
                            <a href="https://wa.me/+543516468746" target="_blank" rel="noreferrer" className='icon wattsap'>
                                <button className='button-solicitar'>
                                    Solicitar
                                </button>
                            </a>
                        </li>
                    </ul>


                </div>


            </div>
        </div>
    )
}

export default CardService