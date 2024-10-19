import React, { useState } from 'react';
import Slider from 'react-slick';
import ReactPlayer from 'react-player'; // إضافة مكتبة react-player
import './Lastevents.css';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const videos = [
  "https://youtu.be/K-a8s8OLBSE?si=87cB8YuHz19_O10g", // رابط الفيديو الأول
  "https://youtu.be/eVli-tstM5E?si=cNuZEm1rV7BVbOib", // رابط الفيديو الثاني
  "https://youtu.be/V9PVRfjEBTI?si=HXnN2WVKkNyRNL5a", // رابط الفيديو الثالث
  "https://youtu.be/cF1Na4AIecM?si=T3ZCy020-ah1YG-S"  // رابط الفيديو الرابع
];

function Lastevent() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [videoIndex, setVideoIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setVideoIndex(next),
  };

  return (
    <div className='last'>
      <div className="title">Laste Events</div> {/* العنوان الجديد */}
      <Slider {...settings}>
        {videos.map((video, idx) => (
          <div className={idx === videoIndex ? "slide activeSlide" : "slide"} key={idx}>
            <ReactPlayer 
              url={video} 
              controls={true}
              width="100%" 
              height="315px"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Lastevent;