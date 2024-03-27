import React from 'react';
import CardService from '../cardService/CardService';
import { service } from '../../date';
import "./service.css";

const Service = () => {
  return (
    <div id='service' className='cards-content'>
      <h1 className='title-service'>Mis servicios</h1>
      {
        service.map((el)=>(
          <CardService service={{...el}}/>
        ))
      }
    </div>
  )
}

export default Service