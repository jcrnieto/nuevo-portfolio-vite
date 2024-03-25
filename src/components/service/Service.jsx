import React from 'react';
import CardService from '../cardService/CardService';
import { service } from '../../date';

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