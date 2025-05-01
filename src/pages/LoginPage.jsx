import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  margin: 100px 380px;
  border: 1px solid black;
  min-width: 400px;
  padding: 20px;
`;

const LoginTitle = styled.p`
  font-size: 30px;
  font-weight: 700;
`;

const TextArea = styled.div`
  padding: 20px;
`;

const IdAear = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerId = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  padding: 10px;
`;

const PasswordArea = styled.div`
  justify-content: center;
  display: flex;
`;

const InnerPassword = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const LoginPage = () => {
  const naviagter = useNavigate();
  return (
    <>
      <Main>
        <LoginTitle>로그인</LoginTitle>
        <TextArea>
          <IdAear>
            <InnerId>
              <label>아이디</label>
              <input type="text" placeholder="아이디를 입력해주세요." />
            </InnerId>
          </IdAear>
          <PasswordArea>
            <InnerPassword>
              <label>비밀번호</label>
              <input type="password" placeholder="비밀번호를 입력해주세요." />
            </InnerPassword>
          </PasswordArea>
        </TextArea>
        <div>
          <button>로그인</button>
          <button>회원가입</button>
          <button onClick={() => naviagter('/')}>돌아가기</button>
        </div>
      </Main>
    </>
  );
};

export default LoginPage;
