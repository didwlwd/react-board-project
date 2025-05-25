import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import PostList from '../components/PostList';
import PostStore from '../store/PostStore';
import UserStore from '../store/UserStore';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

const AddPost = styled.button`
  background-color: #cecdcd;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  height: 50px;

  &:hover {
    scale: 1.01;
    color: black;
  }
`;

const All = styled.div`
  margin: 20px auto;
  width: 600px;
`;

const HomePage = () => {
  const navigater = useNavigate();
  const { userState } = UserStore();
  const { getPost } = PostStore();

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <ToastContainer />
      <All>
        <PostHeader>
          <div></div>
          <h2>게시글 목록</h2>
          {userState.id === '' ? <div></div> : <AddPost onClick={() => navigater('/addBoard')}>게시글 작성</AddPost>}
        </PostHeader>

        <PostList />
      </All>
    </>
  );
};

export default HomePage;
