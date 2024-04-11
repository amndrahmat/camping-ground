import React from "react";
import Nick from "../Assets/nick.png";
import Raisa from "../Assets/raisa.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  const workInfoData = [
    {
      image: Nick,
      name: "Nicholas Saputra",
      review: `For the holidays or camping trips, there are places where you can rent
      tents if you want to camp. The downside is that the roads are still
      badly damaged. The entry ticket is too expensive, not everyone can
      afford it, especially those who are just visiting and not booking
      camping. I am hopeful that it will be taken into consideration again,
      but there are still improvements.`,
    },
    {
      image: Raisa,
      name: "Raisa Andriana",
      review:
        "A camping site that is both comfortable and spacious, and can be enjoyed with either family or friends. The complete facilities include a mosque, public toilets, a deer sanctuary, cafeteria, swimming pool, numerous public toilets, and snack stalls open 24 hours. For a large parking area. Local tourists can expect to pay 20k for an entrance ticket, along with 10k for camping, 6k for motorbike parking, and 6k for staying overnight with a motorcycle.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
              <h2>{data.name}</h2>
              <p>{data.review}</p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
