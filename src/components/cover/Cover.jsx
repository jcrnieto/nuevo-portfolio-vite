import React from 'react';
import './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

function Cover() {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted></video>
        <h1>JUAN CRUZ NIETO</h1>
        <p> Desarrollador Web</p>
    </div>
  )
}

export default Cover