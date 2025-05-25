import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import UserStore from '../store/UserStore';
import { SlAnchor } from 'react-icons/sl';
import { FaMoon } from 'react-icons/fa';
import { IoIosSunny, IoIosLogOut } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

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

const UserIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navi = () => {
  const header = () => {
    return (
      <>
        <LoginEnrollButton to="/login">로그인</LoginEnrollButton>
        <LoginEnrollButton to="enroll">회원가입</LoginEnrollButton>
      </>
    );
  };

  const { loginState, logOut, userState } = UserStore();
  const navigate = useNavigate();

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
              <HeaderUser to={'/userDetail'}>
                {userState.userThumbnail === '' ? (
                  <UserIcon />
                ) : (
                  <ProfileImg src={userState.userThumbnail} alt="유저사진" />
                )}

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
    </>
  );
};

export default Navi;
