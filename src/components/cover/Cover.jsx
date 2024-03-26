import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

function Cover() {
  return (
    <div className='cover-container'>
        <div className='overlay'></div> 
        <video className='video' src={coverVideo} autoPlay loop muted></video>
        <h1 className='title-cover'>JUAN CRUZ NIETO</h1>
        <p className='description-cover'> Desarrollador Web</p>
    </div>
  )
}

export default Cover