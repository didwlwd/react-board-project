import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.form`
  margin: 100px auto;
  margin-bottom: 0;
  background-color: #dfdfdf;
  border-radius: 15px;
  min-width: 400px;
  width: 600px;
  padding: 20px;
  box-shadow: 2px 3px 2px #acabab;
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

const IdCheck = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: red;
`;

const EnrollPage = ({ users, getUsers, enrollUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
  }, []);

  const [formData, setFormData] = useState({
    id: '',
    userId: '',
    password: '',
    email: '',
    userName: '',
    userNikName: '',
    userThumbnail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    await enrollUser(users, formData);
    navigate('/');
  };

  return (
    <Main onSubmit={handleSubmit}>
      <LoginTitle>회원가입</LoginTitle>
      <TextArea>
        <Area>
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
        </Area>

        <Area>
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
        </Area>
        <Area>
          <EmailInner>
            <InnerLable>이메일</InnerLable>
            <InnerInput
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="이메일을 입력해주세요."
            />
          </EmailInner>
        </Area>
        <Area>
          <NameInner>
            <InnerLable>이름</InnerLable>
            <InnerInput
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="이름을 입력해주세요."
            />
          </NameInner>
        </Area>
        <Area>
          <NikName>
            <InnerLable>닉네임</InnerLable>
            <InnerInput
              type="text"
              name="userNikName"
              value={formData.userNikName}
              onChange={handleChange}
              placeholder="사용하실 닉네임을 입력해주세요."
            />
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
