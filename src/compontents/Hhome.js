import React from 'react';
import './Hhmoe.css';
import Cart from './Cart';
import Lastevent from './Lastevent';
import Byti from './Byti';
import aboutimg from './imges/Frame 386.png'; // تأكد من استخدام المسار الصحيح
import { useInView } from 'react-intersection-observer';


export function Hhmoe(props) {
  // استخدام Intersection Observer للنص
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // استخدام Intersection Observer للصورة
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="homem">
      <div className="start container">
        <div className="hero-content">
          <h1>The Ultimate Platform for Planning and Promoting Successful Events</h1>
          <p>Eventify is a leading event and conference website that brings together industry experts, thought leaders, and enthusiasts from around the world to share knowledge, network, and make lasting connections.</p>
          
          <a href="#about" className="see-more">See more about us ↓</a>
        </div>
      </div>

      <section className="about-section">
        <div 
          className={`about-content ${textInView ? 'appear' : ''}`} // إضافة الفئة بناءً على ظهورها
          ref={textRef} 
          style={{ 
            transform: textInView ? 'translateX(0)' : 'translateX(-50px)' // الحركة
          }}
        >
          <h2>WHO WE ARE</h2>
          <p>Eventify is a comprehensive platform for organizing and promoting events, conferences, and other industry-related gatherings. Our team of experienced professionals is dedicated to providing unparalleled event management solutions that streamline your event planning process and maximize your ROI. We believe that events are powerful tools for driving growth, innovation, and success, and we're committed to helping you make the most of every event.</p>
          <button className="get-started">Get Started</button>
        </div>
        <div 
          className={`about-image ${imageInView ? 'appear' : ''}`} // إضافة الفئة بناءً على ظهورها
          ref={imageRef} 
          style={{ 
            transform: imageInView ? 'translateX(0)' : 'translateX(50px)' // الحركة
          }}
        >
          <img src={aboutimg} alt="About Eventify" />
        </div>
      </section>
      <Cart/>
      <Lastevent/>
      <Byti/>
     <h1>ghjjkkk</h1>
    </div>
  );
};

export default Hhmoe;
