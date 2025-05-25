import React, { useEffect, useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserStore from '../store/UserStore';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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
const Futer = styled.span`
  color: green;
`;

const schema = yup.object().shape({
  id: yup.string().required('아이디를 입력해주세요.'),
  password: yup.string().required('비밀번호를 입력해주세요.').min(6, '6자리 이상 입력해주세요.'),
  email: yup.string().email('유효한 이메일 형식이 아닙니다.').required('이메일을 입력해주새요.'),
  user_name: yup.string().required('이름을 입력해주세요.').min(2, '2자리 이상 입력해주세요.'),
  user_nikname: yup.string().required('닉네임을 입력해주세요.').min(2, '2자리 이상 입력해주세요.'),
});

const EnrollPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { enrollUser } = UserStore();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await enrollUser(data);

    if (result) {
      alert('회원가입 성공!');
      navigate('/');
    } else {
      alert('회원가입 실패!');
    }
  };

  // const handleSubmit = async (ev) => {
  //   ev.preventDefault();

  //   await enrollUser(formData);
  //   navigate('/');
  // };

  return (
    <Main onSubmit={handleSubmit(onSubmit)}>
      <LoginTitle>회원가입</LoginTitle>
      <TextArea>
        <Area>
          <InnerId>
            <InnerLable>아이디</InnerLable>
            <InnerInput type="text" placeholder="아이디를 입력해주세요." {...register('id')} />
          </InnerId>
        </Area>
        {errors.id && <Futer>{errors.id.message}</Futer>}

        <Area>
          <InnerPassword>
            <InnerLable>비밀번호</InnerLable>
            <InnerInput type="password" placeholder="비밀번호를 입력해주세요." {...register('password')} />
          </InnerPassword>
        </Area>
        {errors.password && <Futer>{errors.password.message}</Futer>}
        <Area>
          <EmailInner>
            <InnerLable>이메일</InnerLable>
            <InnerInput type="email" placeholder="이메일을 입력해주세요." {...register('email')} />
          </EmailInner>
        </Area>
        {errors.email && <Futer>{errors.email.message}</Futer>}

        <Area>
          <NameInner>
            <InnerLable>이름</InnerLable>
            <InnerInput type="text" placeholder="이름을 입력해주세요." {...register('user_name')} />
          </NameInner>
        </Area>
        {errors.user_name && <Futer>{errors.user_name.message}</Futer>}

        <Area>
          <NikName>
            <InnerLable>닉네임</InnerLable>
            <InnerInput type="text" placeholder="사용하실 닉네임을 입력해주세요." {...register('user_nikname')} />
          </NikName>
        </Area>
        {errors.user_nikname && <Futer>{errors.user_nikname.message}</Futer>}
      </TextArea>
      <ButtonArea>
        <LoginButton type="submit">가입하기</LoginButton>
        <FooterButton to="/">돌아가기</FooterButton>
      </ButtonArea>
    </Main>
  );
};

export default EnrollPage;
