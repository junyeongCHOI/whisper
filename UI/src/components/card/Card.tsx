import React, { useState } from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

interface CardProps {
  style?: any;
  data: {
    text: string;
    imgUrl: string;
  };
}

interface CardIconProps {
  readonly imgUrl: string;
}

interface CardWrapProps {
  readonly style: any;
}

// 실 사용시 주석부분을 사용, 주석 아래의 JSX는 제거.

const Card: React.FC<CardProps> = ({ style, data }) => {
  const [isLiked, setLiked] = useState<boolean>(false);

  return (
    <CardWrap style={style}>
      <HeartIcon onClick={() => setLiked(!isLiked)}>
        <ReactSVG src={isLiked ? "/svgs/heart.svg" : "/svgs/e-heart.svg"} />
      </HeartIcon>
      <CardIcon imgUrl={data.imgUrl} />
      <CardText>{data.text}</CardText>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div<CardWrapProps>`
  position: relative;
  border-radius: 3px;
  box-shadow: 0 2px 6px 0 rgba(47, 83, 151, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//img는 어떤방식으로 로드 할건지. img 형태, icon 형태?
const CardIcon = styled.div<CardIconProps>`
  width: 80px;
  height: 76px;
  opacity: 0.7;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-size: 80px 76px;
  background-position: center;
  margin-bottom: 50px;
`;

//width, height 는 상의 후 결정.
const CardText = styled.text`
  line-height: 1.78;
  font-size: 18px;
  text-align: center;
  color: #1b2437;
  font-weight: 600;
`;

const HeartIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 24px;
  cursor: pointer;
`;
