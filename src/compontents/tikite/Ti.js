import React from 'react';
import BuyTICKETS from './BuyTICKETS';
import './Ti.css'; // تأكد من استيراد ملف CSS
 import FGHC from '../imges/abkl.png';
;

const Ti = () => {
  return (
    <div className="container">
      <img src={FGHC } alt=" tt" className="background-image" /> 

      <div className="content">
      <BuyTICKETS />
      </div>

      <div className="event-banner">
      <div className="event-text">
        <h4>READY TO CREATE YOUR OWN UNFORGETTABLE EVENT?</h4>
        <p>Sign up for Eventify today and start planning your next success!</p>
      </div>
      <div className="event-signup">
        <button>JOIN NOW</button>
      </div>
    </div>
      
    </div>
  );
};

export default Ti;
