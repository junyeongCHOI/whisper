import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

interface WhisperSLiderProps {
  children: any;
  style: any;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const WhisperSLider: React.FC<WhisperSLiderProps> = ({ children, style }) => {
  return (
    <SliderWrap style={style}>
      <Slider {...sliderSettings}>{children}</Slider>
    </SliderWrap>
  );
};

export default WhisperSLider;

const SliderWrap = styled.div``;

const SliderContainer = styled.div``;
