import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import axios from "axios";
import Kakao from "kakaojs";
import { GoogleLogin } from "react-google-login";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import "../../styles/ResponsiveCss.css";

declare global {
  interface Window {
    Kakao: any;
  }
}

Kakao.init("418bd12c3a35441d58e113ac8cd7b654");

const SignIn: React.FunctionComponent<RouteComponentProps> = (props) => {
  const KakaoLogin = () => {
    Kakao.Auth.login({
      success: function (authObj: any) {
        console.log(authObj);
        fetch(`${"http://172.30.1.13:5000/"}user/kakao`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
          body: JSON.stringify({
            nickname: "채린호호2",
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.message === "SIGN_IN_COMPLETE") {
              sessionStorage.setItem("token", res.token);
              props.history.push("/main");
            } else if (res.message === "SIGN_UP_COMPLETE") {
              props.history.push("/signUp");
              alert("회원가입이 필요합니다.");
            }
            console.log(res);
          });
      },
      fail: function (err: any) {
        console.log(err);
      },
    });
  }; //카카오 소셜 로그인

  const KakaoLogout = () => {
    Kakao.Auth.logout();
    sessionStorage.removeItem("token");
  }; //카카오 로그아웃

  const responseGoogle = async (response: any) => {
    console.log(response);
    try {
      let res = await axios.post(`${"http://172.30.1.11:5000/"}user/goolge`, {
        // headers: {
        //   Authorization: response.tokenObj.access_token,
        // },
        // data: {
        Authorization: response.tokenObj.access_token,
        nickname: "nickname",
        googleId: response.tokenObj.googleId,
        //},
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }; //구글 소셜 로그인

  return (
    <Row style={{ height: "100vh", position: "relative" }}>
      <Col className="SignImage" flex="1 1 350px" />
      <Col flex="1 1 350px" style={{ backgroundColor: "#f8f8f4" }}>
        <Right>
          <Title>소근</Title>
          <Link to="/emailSignIn">
            <SignInButton theme={theme}>이메일로 로그인하기</SignInButton>
          </Link>
          <SignInButton theme={theme} onClick={KakaoLogin}>
            카카오톡으로 로그인하기
          </SignInButton>
          <GoogleLogin
            clientId="999952350863-tuacfmh4cjfangjkn58pbnio6boa7non.apps.googleusercontent.com"
            render={(renderProps) => (
              <SignInButton theme={theme} onClick={renderProps.onClick} disabled={renderProps.disabled}>
                구글로 로그인하기
              </SignInButton>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}></GoogleLogin>
          <Link to="/signUp">
            <SignInButton theme={{ backgroundColor: "#faa02a", border: "none", color: "#f9f9f9", margin: "10px 0 0 0" }}>소근과 함께하기</SignInButton>
          </Link>
        </Right>
      </Col>
      <div style={{ height: "100%", width: "100%", position: "absolute" }}>
        <div style={{ height: "100%", width: "100%", backgroundColor: "gray", opacity: "0.5", position: "relative" }} />
        <div style={{ height: "30%", width: "40%", backgroundColor: "white", position: "relative", top: "-70%", left: "30%", padding: "3% 10%", borderRadius: "15px" }}>
          <InputTitle>닉네임을 써주세요!</InputTitle>
          <InputBox />
          <SignUpButton style={{ display: "block" }}>확인</SignUpButton>
        </div>
      </div>
    </Row>
  );
};

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 264px;
  font-family: AppleSDGothicNeo;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
`;

const Title = styled.p`
  margin-bottom: 34px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.69px;
  color: #6b6c6f;
`;

const SignInButton = styled.button`
  margin: ${(props) => props.theme.margin};
  width: 350px;
  height: 50px;
  border-radius: 20px;
  border: ${(props) => props.theme.border};
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.46px;
  color: ${(props) => props.theme.color};
`;

const InputTitle = styled.p`
  margin: 20px 0 11px 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.34px;
  color: #6b6c6f;
`;

const InputBox = styled.input`
  width: 351px;
  height: 38px;
  opacity: 0.7;
  border-radius: 4px;
  border: solid 1px #686565;
`;

const SignUpButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 20px;
  border: solid 2px #686565;
  background-color: rgba(255, 255, 255, 0);
  margin: 31px 30px 0 0;
`;

const theme = {
  border: "solid 1px #686565",
  backgroundColor: "rgba(255, 255, 255, 0)",
  color: "#6b6c6f",
  margin: "0 0 20px 0",
};

export default SignIn;
