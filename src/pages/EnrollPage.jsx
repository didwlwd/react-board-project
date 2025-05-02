import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.form`
  margin: 100px auto;
  background-color: #dfdfdf;
  border-radius: 15px;
  min-width: 400px;
  width: 600px;
  padding: 20px;
`;

const LoginTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;

const TextArea = styled.div`
  padding: 20px;
`;

const InnerId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 20px;
`;

const InnerLable = styled.label`
  color: black;
  font-size: 20px;
  font-weight: 700;
  padding-right: 10px;
`;

const InnerInput = styled.input`
  padding: 5px 10px;
  outline-color: #f8ebd2;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  width: 230px;
`;

const InnerPassword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const LoginButton = styled.button`
  background-color: #c0bebe;
  color: white;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  width: 310px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    scale: 1.01;
    color: black;
  }
`;

const EmailInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 14px;
`;

const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NameInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 32px;
`;

const NikName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 14px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FooterButton = styled(Link)`
  background-color: #c0bebe;
  color: white;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  width: 310px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 500;

  &:hover {
    scale: 1.01;
    color: black;
  }
`;
const EnrollPage = () => {
  return (
    <Main>
      <LoginTitle>회원가입</LoginTitle>
      <TextArea>
        <Area>
          <InnerId>
            <InnerLable>아이디</InnerLable>
            <InnerInput type="text" placeholder="아이디를 입력해주세요." />
          </InnerId>
        </Area>
        <Area>
          <InnerPassword>
            <InnerLable>비밀번호</InnerLable>
            <InnerInput type="password" placeholder="비밀번호를 입력해주세요." />
          </InnerPassword>
        </Area>
        <Area>
          <EmailInner>
            <InnerLable>이메일</InnerLable>
            <InnerInput type="email" placeholder="이메일을 입력해주세요." />
          </EmailInner>
        </Area>
        <Area>
          <NameInner>
            <InnerLable>이름</InnerLable>
            <InnerInput type="text" placeholder="이름을 입력해주세요." />
          </NameInner>
        </Area>
        <Area>
          <NikName>
            <InnerLable>닉네임</InnerLable>
            <InnerInput type="text" placeholder="사용하실 닉네임을 입력해주세요." />
          </NikName>
        </Area>
      </TextArea>
      <ButtonArea>
        <LoginButton type="submit">가입하기</LoginButton>
        <FooterButton to="/">돌아가기</FooterButton>
      </ButtonArea>
    </Main>
  );
};

export default EnrollPage;
