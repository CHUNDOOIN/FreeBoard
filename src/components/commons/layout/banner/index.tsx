import styled from "@emotion/styled";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 400px;
  background-color: aliceblue;
`;

const SliderItem = styled.img`
  height: 350px;
  margin: auto;

  cursor: pointer;
`;

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
