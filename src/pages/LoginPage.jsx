import React, { useEffect, useState } from 'react';
import { data, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserStore from '../store/UserStore';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Main = styled.form`
  margin: 100px auto;
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

const Futer = styled.span`
  color: green;
`;

const schema = yup.object().shape({
  id: yup.string().required('아이디를 입력해주세요.'),
  password: yup.string().min(6, '6자리 이상 입력해주세요.').required('비밀번호를 입력해주세요.'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { checkUser, loginState, error, resetError } = UserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState === true) {
      navigate('/');
    }
  }, [loginState]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      resetError();
    }
  }, [error]);

  const onSubmit = async (data) => {
    const result = await checkUser(data);

    if (result) {
      alert('로그인 성공');
      navigate('/');
    }
  };

  return (
    <>
      <ToastContainer />
      <Main onSubmit={handleSubmit(onSubmit)}>
        <LoginTitle>로그인</LoginTitle>
        <TextArea>
          <IdAear>
            <InnerId>
              <InnerLable htmlFor="id">아이디</InnerLable>
              <InnerInput type="text" placeholder="아이디를 입력해주세요." {...register('id')} />
            </InnerId>
          </IdAear>
          {errors.id && <Futer>{errors.id.message}</Futer>}
          <PasswordArea>
            <InnerPassword>
              <InnerLable htmlFor="password">비밀번호</InnerLable>
              <InnerInput type="password" placeholder="비밀번호를 입력해주세요." {...register('password')} />
            </InnerPassword>
          </PasswordArea>
          {errors.password && <Futer>{errors.password.message}</Futer>}
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
