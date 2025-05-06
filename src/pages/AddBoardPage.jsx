import React from 'react';
import styled from 'styled-components';

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

const AddBoardPage = () => {
  return (
    <>
      <Form>
        <Head>게시판 등록</Head>
        <ImageArea>
          <ImageLabel>참고 이미지</ImageLabel>
          <InnerInput type="text" placeholder="이미지 URL을 입력해주세요." />
        </ImageArea>

        <Outdiv>
          <Div>
            <Innerdiv>
              <Title placeholder="제목을 입력해주세요."></Title>
            </Innerdiv>
            <ContextDiv>
              <Context placeholder="내용을 입력해주세요."></Context>
            </ContextDiv>
          </Div>
        </Outdiv>

        <Button type="sumbit">작성하기</Button>
      </Form>
    </>
  );
};

export default AddBoardPage;
