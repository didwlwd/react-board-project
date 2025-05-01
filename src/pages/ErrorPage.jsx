import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigator = useNavigate();
  return (
    <div>
      에러페이지입니다 돌아가주세요
      <button onClick={() => navigator('/')}>돌아가기</button>
    </div>
  );
};

export default ErrorPage;
