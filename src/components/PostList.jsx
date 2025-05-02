import React from 'react';
import styled from 'styled-components';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { MdOutlineComment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

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

const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  margin-right: 10px;
  vertical-align: sub;
`;

const WriterPoto = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 8px;
`;

const PostContent = styled.p`
  color: #707070;
`;

const UserNikName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const PostFuter = styled.div`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 5px;
`;

const PostList = ({ posts }) => {
  const navigater = useNavigate();
  return (
    <>
      {posts.map((post) => (
        <Main key={post.postId} onClick={() => navigater(`/detail/${post.postId}`)}>
          <Content>
            <div>
              <ProfileImg
                src="data:image/png;base64,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"
                alt="프로필사진"
              />
              <UserNikName>{post.author}</UserNikName>
            </div>
            <h3>{post.title}</h3>
            <PostContent>{post.content}</PostContent>
            <PostFuter>
              <FaRegHeart color="#7c7c7c" />
              <span>{post.views}</span>
              <MdOutlineComment color="#7c7c7c" />
              <span>{post.likes}</span>
              <span>{post.createdAt}</span>
            </PostFuter>
          </Content>

          <WriterPoto src={post.thumbnail} alt="글 사진" />
        </Main>
      ))}
    </>
  );
};

export default PostList;
