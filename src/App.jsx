import { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EnrollPage from './pages/EnrollPage';
import { SlAnchor } from 'react-icons/sl';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny } from 'react-icons/io';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/GlobalStyle';
import AddBoardPage from './pages/AddBoardPage';
import ErrorPage from './pages/ErrorPage';
import PostDetailPage from './pages/PostDetailPage';

const Nav = styled.nav`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid #eeeeee;
  background-color: #e6e6e6;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #b3b3b3;
  }
`;

const LoginEnrollButton = styled(Link)`
  background-color: #999999;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;

  &:hover {
    scale: 1.01;
    color: black;
  }
`;

const ThemeChange = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;

  &:hover {
    scale: 1.01;
    color: #eeeeee;
  }
`;

function App() {
  const Wrap = () => {
    return (
      <>
        <BrowserRouter>
          <Nav>
            <HeaderDiv>
              <Title>
                <SlAnchor />
                블로그
              </Title>
              <StyledLink to="/">홈</StyledLink>
            </HeaderDiv>
            <HeaderDiv>
              <LoginEnrollButton to="/login">로그인</LoginEnrollButton>
              <LoginEnrollButton to="enroll">회원가입</LoginEnrollButton>
              <ThemeChange>
                <FaMoon />
              </ThemeChange>
            </HeaderDiv>
          </Nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/enroll" element={<EnrollPage />} />
            <Route path="/addBoard" element={<AddBoardPage />} />
            <Route path="/detail/:postId" element={<PostDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Wrap />
    </>
  );
}

export default App;
