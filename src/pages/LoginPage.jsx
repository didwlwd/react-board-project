import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserStore from '../store/UserStore';

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

const IdAear = styled.div`
  display: flex;
  justify-content: center;
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
`;

const PasswordArea = styled.div`
  justify-content: center;
  display: flex;
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

  &:hover {
    scale: 1.01;
    color: black;
  }
`;

const FooterArea = styled.div`
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

const LoginPage = () => {
  const { users, getUsers } = UserStore();
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((use) => use.userId === formData.userId);
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Main onSubmit={handleLogin}>
        <LoginTitle>로그인</LoginTitle>
        <TextArea>
          <IdAear>
            <InnerId>
              <InnerLable>아이디</InnerLable>
              <InnerInput
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="아이디를 입력해주세요."
              />
            </InnerId>
          </IdAear>
          <PasswordArea>
            <InnerPassword>
              <InnerLable>비밀번호</InnerLable>
              <InnerInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </InnerPassword>
          </PasswordArea>
        </TextArea>

        <FooterArea>
          <LoginButton type="submit">로그인</LoginButton>
          <FooterButton to="/enroll">회원가입</FooterButton>
          <FooterButton to="/">돌아가기</FooterButton>
        </FooterArea>
      </Main>
    </>
  );
};

export default LoginPage;
