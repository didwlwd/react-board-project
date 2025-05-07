import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import EnrollPage from './pages/EnrollPage';
import { SlAnchor } from 'react-icons/sl';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny, IoIosLogOut } from 'react-icons/io';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styled/GlobalStyle';
import AddBoardPage from './pages/AddBoardPage';
import ErrorPage from './pages/ErrorPage';
import PostDetailPage from './pages/PostDetailPage';
import UserStore from './store/UserStore';
import UserDetailPage from './pages/UserDetailPage';

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
    color: #eeeeee;
  }
`;

const HeaderUser = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  height: 70px;
  padding: 5px;

  cursor: pointer;

  &:hover {
    color: black;
    background-color: #f2f2f2;
  }
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
`;

const HeaderUserWelcome = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 5px;
`;

const UserNikName = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #819a7b;
`;

const Icon = styled(IoIosLogOut)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6060;

  &:hover {
    color: #eeeeee;
  }
`;

const IconButton = styled.button`
  padding: 10px;
  background-color: #ff6060;
`;

const Icon2 = styled(FaMoon)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const header = () => {
    return (
      <>
        <LoginEnrollButton to="/login">로그인</LoginEnrollButton>
        <LoginEnrollButton to="enroll">회원가입</LoginEnrollButton>
      </>
    );
  };

  const Wrap = () => {
    const { users, getUsers, checkUser, loginState, logOut, userState, updateUser, deleteUser, error, enrollUser } =
      UserStore();
    const navigate = useNavigate();

    useEffect(() => {
      getUsers();
    }, []);

    const handleLogOut = () => {
      logOut();
      navigate('/');
    };
    return (
      <>
        <Nav>
          <HeaderDiv>
            <Title>블로그</Title>
            <StyledLink to="/">홈</StyledLink>
          </HeaderDiv>
          <HeaderDiv>
            {loginState ? (
              <>
                <HeaderUser to={'/userDetail/' + userState.id}>
                  <ProfileImg src={userState.userThumbnail} alt="유저사진" />
                  <HeaderUserWelcome>
                    어서오세요! <UserNikName>{userState.userNikName}</UserNikName> 님!
                  </HeaderUserWelcome>
                </HeaderUser>
                <IconButton onClick={handleLogOut}>
                  <Icon />
                </IconButton>
              </>
            ) : (
              header()
            )}
            <ThemeChange>
              <Icon2 />
            </ThemeChange>
          </HeaderDiv>
        </Nav>

        <Routes>
          <Route path="/" element={<HomePage users={users} getUsers={getUsers} userState={userState} />} />
          <Route path="/login" element={<LoginPage users={users} getUsers={getUsers} checkUser={checkUser} />} />
          <Route path="/enroll" element={<EnrollPage users={users} getUsers={getUsers} enrollUser={enrollUser} />} />
          <Route path="/addBoard" element={<AddBoardPage />} />
          <Route path="/detail/:postId" element={<PostDetailPage />} />
          <Route
            path="/userDetail/:id"
            element={
              <UserDetailPage
                userState={userState}
                updateUser={updateUser}
                deleteUser={deleteUser}
                getUsers={getUsers}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Wrap />
      </BrowserRouter>
    </>
  );
}

export default App;
