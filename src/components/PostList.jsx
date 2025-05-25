import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { MdOutlineComment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PostStore from '../store/PostStore';
import UserStore from '../store/UserStore';
import { PulseLoader } from 'react-spinners';

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 10px auto;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 1px 2px 1px #dbdbdb;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

const Content = styled.div`
  padding: 5px;
`;

const WriterPoto = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 8px;
`;

const PostContent = styled.p`
  color: #707070;
`;

const PostFuter = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
`;

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  margin-right: 10px;
  vertical-align: sub;
`;

const UserNikName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const Error = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const PostList = () => {
  const { userState } = UserStore();
  const { posts, loading, error, getPost } = PostStore();
  useEffect(() => {
    getPost();
  }, []);

  const content1 = posts.content;

  const navigater = useNavigate();

  function Loader() {
    return <PulseLoader />;
  }

  if (loading && posts.length === 0) return Loader();
  if (error) return <Error>{error}</Error>;
  if (!posts || !posts.content) return null;

  return (
    <>
      {content1.map((post) => (
        <Main key={post.board_no} onClick={() => navigater(`/detail/${post.board_no}`)}>
          <Content>
            <div>
              <ProfileImg src={userState === '' ? '' : post.user_thumbnail} alt="프로필사진" />
              <UserNikName>{post.user_nikname}</UserNikName>
            </div>
            <h3>{post.title}</h3>
            <PostContent>{post.content}</PostContent>
            <PostFuter>
              <FaRegHeart color="#7c7c7c" />
              <span>{post.views}</span>
              <MdOutlineComment color="#7c7c7c" />
              <span>{post.likes}</span>
              <span>{post.create_date}</span>
            </PostFuter>
          </Content>

          <WriterPoto src={post.thumbnail} alt="글 사진" />
        </Main>
      ))}
    </>
  );
};

export default PostList;
