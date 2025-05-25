import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EnrollPage from './pages/EnrollPage';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/GlobalStyle';
import AddBoardPage from './pages/AddBoardPage';
import ErrorPage from './pages/ErrorPage';
import PostDetailPage from './pages/PostDetailPage';
import UserStore from './store/UserStore';
import UserDetailPage from './pages/UserDetailPage';
import Navi from './components/Navi';

function App() {
  const Wrap = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/enroll" element={<EnrollPage />} />
          <Route path="/addBoard" element={<AddBoardPage />} />
          <Route path="/detail/:board_no" element={<PostDetailPage />} />
          <Route path="/userDetail" element={<UserDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Navi />
        <Wrap />
      </BrowserRouter>
    </>
  );
}

export default App;
