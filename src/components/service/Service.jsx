import React from 'react';
import CardService from '../cardService/CardService';
import { service } from '../../date';
import "./service.css";

const Service = () => {
  return (
    <div id='service' className='cards-content'>
      {
        service.map((el)=>(
          <CardService service={{...el}}/>
        ))
      }
    </div>
  )
}

export default Service