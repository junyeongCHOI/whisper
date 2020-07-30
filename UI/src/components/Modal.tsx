import React from "react";
import styled from "styled-components";

interface ModalProps {
  NicknameSetting: (e: string) => void;
  KakaoLogin: () => void;
  GoogleLogin: (e: any) => void;
  SocialKinds: string;
  Nickname: string;
}

const Modal: React.FunctionComponent<ModalProps> = (props) => {
  const socialSignIn = () => {
    let NicknameLeng = props.Nickname.split("").length;
    if (NicknameLeng < 2 || NicknameLeng > 10) {
      alert("닉네임을 2 ~ 9글자 이내로 설정해주세요.");
    } else if (props.SocialKinds === "kakao") {
      props.KakaoLogin();
    } else if (props.SocialKinds === "google") {
    }
  }; //닉네임 테스트 확인 및 소셜 로그인

  return (
    <ModalLayout>
      <ModalBox />
      <div style={{ height: "30%", width: "35%", backgroundColor: "white", position: "relative", top: "-70%", left: "32.5%", padding: "3% 6%", borderRadius: "15px" }}>
        <InputTitle>닉네임을 써주세요!</InputTitle>
        <InputBox
          onChange={(e) => {
            props.NicknameSetting(e.target.value);
          }}
        />
        <SignUpButton onClick={socialSignIn}>확인</SignUpButton>
      </div>
    </ModalLayout>
  );
};

const ModalLayout = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const ModalBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: gray;
  opacity: 0.5;
  position: relative;
`;

const InputTitle = styled.p`
  margin: 20px 0 11px 0;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.34px;
  color: #6b6c6f;
`;

const InputBox = styled.input`
  width: 100%;
  height: 38px;
  opacity: 0.7;
  border-radius: 4px;
  border: solid 1px #686565;
`;

const SignUpButton = styled.button`
  width: 45%;
  height: 40px;
  border-radius: 20px;
  border: solid 2px #686565;
  background-color: rgba(255, 255, 255, 0);
  margin: 31px 30px 0 0;
  display: block;
`;

export default Modal;
