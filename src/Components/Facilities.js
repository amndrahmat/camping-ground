import React from "react";
import Parking from "../Assets/parking.png";
import Toilet from "../Assets/toilet.png";
import Deer from "../Assets/Deer.png";
import Delivery from "../Assets/Delivery.png";
import Camping from "../Assets/camping.png";
import Restaurant from "../Assets/restaurant.png";

const Work = () => {
  const workInfoData = [
    {
      image: Parking,
      title: "Parking",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: Toilet,
      title: "Toilet",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: Delivery,
      title: "Fast Deliveries",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Deer,
      title: "Deer",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Camping,
      title: "Camping",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
      image: Restaurant,
      title: "Restaurant",
      // text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Facilities</p>
        <h1 className="primary-heading">How About Facilities?</h1>
        <p className="primary-text">
          Public facilities are available to assist visitors in carrying out
          their desired activities.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
