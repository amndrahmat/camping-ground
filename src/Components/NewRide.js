import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/wisata-baru.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">Enjoy the new rides</h1>
        <p className="primary-text">
          For those of you who like challenges and rock climbing, this ride is
          perfect for testing your agility.
        </p>
        <p className="primary-text">
          An exhilarating activity that necessitates excellent physical
          condition. The right equipment and training can make it a rewarding
          and enjoyable hobby.
        </p>

        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
