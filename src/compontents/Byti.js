import React, { useState, useEffect } from 'react';
import './Byti.css';

const ConferenceTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-15T00:00:00");
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="containerss">
      <h4>JOIN US FOR OUR UPCOMING EVENT!</h4>
      <h5>The Future of Technology Conference</h5>
      <div className="timer">
        <div className="time-box">
          <span>{timeLeft.days || 0}</span>
          <p>DAYS</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours || 0}</span>
          <p>HOURS</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes || 0}</span>
          <p>MINUTES</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds || 0}</span>
          <p>SECONDS</p>
        </div>
      </div>
      <p>April 15-17, 2025</p>
      <p>San Francisco, California</p>
      <div className="buttons">
        <button className="details">VIEW DETAILS</button>
        <button className="ticket">BUY TICKET</button>
      </div>
    </div>
  );
};

export default ConferenceTimer;