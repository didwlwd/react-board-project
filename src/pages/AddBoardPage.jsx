import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PostStore from '../store/PostStore';
import UserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  margin: 30px auto;
  width: 700px;
  padding: 15px 10px;
  border-radius: 12px;
  background-color: #f5f5f5;
  box-shadow: 2px 3px 2px #acabab;
`;

const ImageArea = styled.div`
  padding: 20px;
`;

const ImageLabel = styled.label`
  font-size: 18px;
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

const Outdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  width: 600px;
`;

const Innerdiv = styled.div`
  width: 100%;
  border-radius: 6px;
  border-radius: 10px;
`;

const Title = styled.input`
  width: 100%;
  height: 50px;
  resize: none;
  overflow: hidden;
  text-align: left;
  font-size: 30px;
  font-weight: 700;
  color: black;
  padding: 10px 0;
  border: none;
  line-height: 30px;
  outline: none;
  cursor: pointer;
  padding: 0 10px;
  border-radius: 10px;
`;

const ContextDiv = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
`;

const Context = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 7px;
  border: none;
  outline-color: #f8ebd2;
  cursor: pointer;
  border-radius: 10px;
`;

const Button = styled.button`
  background-color: #c0bebe;
  color: white;
  margin: 20px 0;
  border: none;
  border-radius: 8px;
  width: 310px;

  &:hover {
    scale: 1.01;
    color: black;
  }
`;

const Head = styled.h2`
  margin: 5px auto;
`;

const Futer = styled.span`
  color: green;
`;

const schema = yup.object().shape({
  thumbnail: yup.string().required('이미지 URL을 입력해주세요.'),
  title: yup.string().required('제목을 입력해주세요.'),
  content: yup.string().required('내용을 입력해주세요.'),
});

const AddBoardPage = () => {
  const navigate = useNavigate();
  const { writeBoard } = PostStore();
  const { userState } = UserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await writeBoard(userState.id, data);
    navigate('/');
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Head>게시판 등록</Head>
        <ImageArea>
          <ImageLabel>참고 이미지</ImageLabel>
          <InnerInput type="text" {...register('thumbnail')} placeholder="이미지 URL을 입력해주세요." />
        </ImageArea>
        {errors.thumbnail && <Futer>{errors.thumbnail.message}</Futer>}
        <Outdiv>
          <Div>
            <Innerdiv>
              <Title placeholder="제목을 입력해주세요." {...register('title')}></Title>
            </Innerdiv>
            {errors.title && <Futer>{errors.title.message}</Futer>}
            <ContextDiv>
              <Context placeholder="내용을 입력해주세요." {...register('content')}></Context>
            </ContextDiv>
            {errors.content && <Futer>{errors.content.message}</Futer>}
          </Div>
        </Outdiv>

        <Button type="sumbit">작성하기</Button>
      </Form>
    </>
  );
};

export default AddBoardPage;
