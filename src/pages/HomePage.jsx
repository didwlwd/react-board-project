import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import PostList from '../components/PostList';
import usepostStore from '../store/PostStore';
import { PulseLoader } from 'react-spinners';

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

const Error = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const HomePage = ({ userState }) => {
  const navigater = useNavigate();
  const { posts, getPost, loading, error } = usepostStore();

  function Loader() {
    return <PulseLoader />;
  }

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (loading && posts.length === 0) return Loader();
  if (error) return <Error>{error}</Error>;

  return (
    <>
      <All>
        <PostHeader>
          <div></div>
          <h2>게시글 목록</h2>
          {userState.id === '' ? <div></div> : <AddPost onClick={() => navigater('/addBoard')}>게시글 작성</AddPost>}
        </PostHeader>

        <PostList posts={posts} userState={userState} />
      </All>
    </>
  );
};

export default HomePage;
