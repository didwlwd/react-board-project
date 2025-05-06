import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
  margin: 50px auto;
  margin-bottom: 0;
  background-color: #def9be;
  border-radius: 15px;
  min-width: 400px;
  width: 600px;
  padding: 20px;
  box-shadow: 2px 3px 2px #acabab;
`;

const DefaultDiv = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const DefaultLabel = styled.label`
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  padding: 8px;
  border-radius: 8px 8px 0 0;
  background-color: #89ae87;
  border-bottom: 1px solid #eeeeee;
`;

const DefaultInput = styled.input`
  width: 100%;
  border: none;
  outline-color: #e5f4a9;
  font-size: 20px;
  padding: 8px;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
`;

const ButtonDiv = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 120px;
  height: 45px;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background-color: #eeeeee;
  }
`;

const BackButton = styled(Link)`
  width: 120px;
  border-radius: 8px;
  background-color: #fefefe;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: black;
    background-color: #eeeeee;
  }
`;

const ReadOnly = styled.input`
  color: #a7a7a7;
  width: 100%;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 8px;
  border-radius: 0 0 8px 8px;
`;

const UserNikName = styled.span`
  color: #819a7b;
  font-size: 30px;
  text-align: center;
`;

const UserDetailPage = ({ userState, deleteUser, updateUser, getUsers }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.id === '') {
      alert('로그인을 하셔야 사용하실수 있습니다.');
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
  const [formData, setFormData] = useState({
    userName: userState.userName,
    userNikName: userState.userNikName,
    email: userState.email,
    userThumbnail: userState.userThumbnail,
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChoice = async (ev) => {
    ev.preventDefault();

    const { name } = ev.target;
    if (name === 'update') {
      return await update1();
    } else {
      return await delete1();
    }
  };

  const update1 = async () => {
    if (confirm('수정하시겠습니까?')) {
      await updateUser(userState.id, formData);
      navigate('/');
    } else {
      return;
    }
  };

  const delete1 = async () => {
    if (confirm('정말 탈퇴하시겠습니까?')) {
      await deleteUser(userState.id);
      navigate('/');
    } else {
      return;
    }
  };

  return (
    <Form onSubmit={handleChoice}>
      <div>
        <h2>
          <UserNikName>{userState.userNikName}</UserNikName> 님의 정보
        </h2>
      </div>

      <DefaultDiv>
        <DefaultLabel>아이디</DefaultLabel>
        <ReadOnly type="text" readOnly value={userState.userId} />
      </DefaultDiv>

      <DefaultDiv>
        <DefaultLabel>이름</DefaultLabel>
        <DefaultInput
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="이름을 입력하세요."
        />
      </DefaultDiv>

      <DefaultDiv>
        <DefaultLabel>닉네임</DefaultLabel>
        <DefaultInput
          type="text"
          name="userNikName"
          value={formData.userNikName}
          onChange={handleChange}
          placeholder="닉네임을 입력하세요."
        />
      </DefaultDiv>

      <DefaultDiv>
        <DefaultLabel>이메일</DefaultLabel>
        <DefaultInput
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요."
        />
      </DefaultDiv>

      <DefaultDiv>
        <DefaultLabel>프로필사진(URL)</DefaultLabel>
        <DefaultInput
          type="text"
          name="userThumbnail"
          value={formData.userThumbnail}
          onChange={handleChange}
          placeholder="프로필사진을 입력하세요.(URL)"
        />
      </DefaultDiv>

      <ButtonDiv>
        <Button type="submit" name="update" onClick={handleChoice}>
          수정하기
        </Button>
        <Button type="submit" name="delete" onClick={handleChoice}>
          회원탈퇴
        </Button>
        <BackButton to="/">돌아가기</BackButton>
      </ButtonDiv>
    </Form>
  );
};

export default UserDetailPage;
