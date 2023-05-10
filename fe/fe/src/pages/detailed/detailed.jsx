import React from 'react'
import "./detailed.css"
import Navbar from "../../component/navbar/Navbar"
import Header from "../../component/header/header"
import Footer from "../../component/footer/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Detailed = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/153571246.jpg?k=4449f3cb683c9e9619af928f258fe7297f76263accf244b0f0696c4372a5735c&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/153570995.jpg?k=949d379512c18e024cb7f60694a35ed8d82b6abae17aa5cedc605647493674ba&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/134457896.jpg?k=e0af28f08396e20b047f5cb0aec2a8bc77d95a614755d3cff7d248eb3c034e46&o=",
    },
    {
      src: "https://r-xx.bstatic.com/xdata/images/xphoto/max1200/153571086.jpg?k=620029172d63a6106eaae5b9470188b335b64a2abfed63d0e3552d9a3d1d660a&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/153571136.jpg?k=c74028724d4a777cd6f27325cbcb7e2a7e4a3fea899f6c79da6fe4dd2e321af6&o=",
    },
    {
      src: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/189831867.jpg?k=607b19e0af0af7d4825e6bbf401d8a9d2c409ce37d7abf0a9a642a127e292754&o=",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow"> Book Now!</button>
          <h1 className="hotelTitle">Nha Trang Bay Full-day Boat Tour with Lunch</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Nha Trang Viet Nam</span>
          </div>
          <span className="hotelDistance">
          On this tour, you’ll embark on a full-day yacht cruise around Nha Trang Bay.
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $24 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Nha Trang Bay Full-day Boat Tour with Lunch</h1>
              <p className="hotelDesc">
              On this tour, you’ll embark on a full-day yacht cruise around Nha Trang Bay.

As you arrive at the Cau Da Pier, you’ll board the yacht and start your sailing journey in the bay.
</p> <p>You'll get the opportunity swim and snorkel at Mun islands, visit Green Oasis and have lunch featuring seafood dishes. There'll also be a chance for you to swim, sunbathe and participate in a number of water sports during your tour.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
              Nha Trang Bay Full-day Boat Tour with Lunch, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$245</b> (9 nights)
              </h2>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Detailed;