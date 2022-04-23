import styled from "@emotion/styled";
// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 250px;
  background-color: aliceblue;
`;

const SliderItem = styled.img`
  width: 300px;
  height: 200px;
  margin: auto;

  cursor: pointer;
`;

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    pause: "hover",
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/layout/hawaii-01.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-02.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-03.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-04.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-05.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-06.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-07.jpg" />
        </div>
        <div>
          <SliderItem src="/layout/hawaii-08.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
