import React from "react";
import Card from "../components/card/Card";
import WhisperSlide from "../components/slider/WhisperSlider";

//목데이타
const data = {
  imgUrl: "/images/happy.png",
  text: "세상에나 에그머니나",
};

//기본 사용법
function Test(props: {}) {
  return (
    <div>
      <Card style={{ width: "312px", height: "452px" }} data={data} />
      <WhisperSlide style={{ marginTop: "40px", backgroundColor: "black" }}>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
        <div>
          <Card style={{ width: "312px", height: "452px" }} data={data} />
        </div>
      </WhisperSlide>
    </div>
  );
}

export default Test;
