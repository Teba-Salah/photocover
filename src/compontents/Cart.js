import React, { useState } from 'react';
import './Cart.css';
import eventImg1 from './imges/Frame 387.png'; 
import eventImg2 from './imges/Group 56.png'; 
import eventImg3 from './imges/Group 1930.png'; 
import EventCard from './Event';  // Import the new component

export function Cart(props) {
  const [activeCard, setActiveCard] = useState(null);
  
  const events = [
    {
      id: 1,
      title: "Trade Desk",
      date: "16 Jul, 2024",
      time: "9:00 AM - 10:00 AM",
      location: "GARND BALLROM, HIETTOLEN HOTTEL",
      speaker: "Robeter PAULE Stones",
      img: eventImg1,
    },
    {
      id: 2,
      title: "Business Meetup",
      date: "18 Jul, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Conference Hall, Main Hotel",
      speaker: "Alice Johnson",
      img: eventImg2,
    },
    {
      id: 3,
      title: "Tech Summit",
      date: "20 Jul, 2024",
      time: "11:00 AM - 1:00 PM",
      location: "Tech Park, Event Center",
      speaker: "John Doe",
      img: eventImg3,
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="homem">
      {/* قسم كروت الأحداث */}
      <section className="events-section">
        <h2 className="section-title">EVENT</h2>
        <div className="cards-container">
          {events.map((event, index) => (
            <EventCard 
              key={event.id}
              event={event}
              isActive={activeCard === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Cart;
