import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoPlay: true
  };
  return (
    <Slider {...settings}>
      <div>
        <img height="100%" src="https://picsum.photos/id/1/1130/800" />
      </div>
      <div>
        <img src="https://picsum.photos/id/2/1130/800" />
      </div>
      <div>
        <img src="https://picsum.photos/id/3/1130/800" />
      </div>
      <div>
        <img src="https://picsum.photos/id/4/1130/800" />
      </div>
      <div>
        <img src="https://picsum.photos/id/5/1130/800" />
      </div>
      <div>
        <img src="https://picsum.photos/id/6/1130/800" />
      </div>
    </Slider>
  );
}