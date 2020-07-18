import React from "react";
import styled from "styled-components";

interface CardProps {
  width: string;
  height: string;
  data: {
    text: string;
    imgUrl: string;
  };
}

interface CardIconProps {
  readonly imgUrl: string;
}

interface CardWrapProps {
  readonly width: string;
  readonly height: string;
}

const Card: React.FC<CardProps> = ({ width, height, data }) => {
  return (
    // <CardWrap width={width} height={height}>
    <CardWrap width="312px" height="452px">
      {/* <CardIcon imgUrl={data.imgUrl} /> */}
      <CardIcon imgUrl={process.env.PUBLIC_URL + "/images/happy.png"} />
      {/* <CardText>{data.text}</CardText> */}
      <CardText>
        세상에 모든 진심은
        <br />
        한결같음으로 증명된다.
      </CardText>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div<CardWrapProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
const CardText = styled.div`
  line-height: 1.78;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #1b2437;
`;
