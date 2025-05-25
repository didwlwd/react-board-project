import React, { useEffect, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { MdOutlineComment } from 'react-icons/md';
import PostReply from '../components/PostReply';
import styled from 'styled-components';
import usepostStore from '../store/PostStore';
import { useParams } from 'react-router-dom';
import PostStore from '../store/PostStore';
import { FaUserCircle } from 'react-icons/fa';
import UserStore from '../store/UserStore';

const Main = styled.div`
  padding: 30px 300px;
`;

const Header = styled.div`
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 8px;
`;

const HeaderNikName = styled.h2`
  font-weight: 500;
  font-size: 32px;
  color: #b1b994;
  text-align: center;
`;

const HeaderAll = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 15px;
  padding: 10px 100px;
`;

const HeaderSpan = styled.span`
  color: #9c9c9c;
`;

const ContextDiv = styled.div`
  width: 100%;
  margin: 30px 0;
  margin-bottom: 0;
  border-bottom: 1px solid #eeeeee;
`;

const Context = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
  padding: 30px 100px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #575757;
`;

const PostLikeDiv = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 30px 100px;
  border-bottom: 1px solid #eeeeee;
`;

const ReplyArea = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: start;
  padding: 30px 100px;
`;

const ReplyIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 10px 10px;
  border-bottom: 1px solid #eeeeee;
`;

const AddReplyForm = styled.form`
  width: 100%;
  padding: 10px 0;
`;

const AddReply = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px 30px;
  outline: none;
  border: 1px solid #eeeeee;
  resize: none;
  font-size: 16px;
  font-weight: 700;
  color: #575757;
`;

const AddButtonDiv = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
`;

const UserIcon = styled(FaUserCircle)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostDetailPage = () => {
  const param = useParams();
  const [replyContent, setReplyContent] = useState({
    reply_content: '',
  });
  const { posts, getPost } = PostStore();

  useEffect(() => {
    getPost();
  }, []);

  const handleChange = async (ev) => {
    const { name, value } = ev.target;
    setReplyContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await writeReply(replyContent);
  };

  const content = posts.content;
  const post = content.find((pos) => pos.board_no === parseInt(param.board_no));

  return (
    <Main>
      <Header>
        <HeaderNikName>{post.title}</HeaderNikName>
        <HeaderAll>
          <HeaderSpan>
            <UserImg src={post.user_thumbnail === null ? <UserIcon /> : post.user_thumbnail} alt="회원사진" />
          </HeaderSpan>
          <HeaderSpan>{post.create_date}</HeaderSpan>
          <HeaderSpan>조회수 {post.views}</HeaderSpan>
        </HeaderAll>
      </Header>

      <ContextDiv>
        <img src={post.thumbnail} />
        <Context readOnly value={post.content}></Context>
      </ContextDiv>

      <PostLikeDiv>
        <FaRegHeart color="#7c7c7c" />
        <span>좋아요 {post.likes}</span>
      </PostLikeDiv>

      <ReplyArea>
        <ReplyIconDiv>
          <MdOutlineComment color="#7c7c7c" />
          <span>댓글 {post.replies}</span>
        </ReplyIconDiv>

        {/* <PostReply param={param} /> */}

        <AddReplyForm onSubmit={handleSubmit}>
          <h3>댓글 달기</h3>
          <AddReply id="reply_content" name="reply_content" placeholder="입력해주세요" onChange={handleChange}>
            {replyContent}
          </AddReply>
          <AddButtonDiv>
            <button type="submit">등록하기</button>
          </AddButtonDiv>
        </AddReplyForm>
      </ReplyArea>
    </Main>
  );
};

export default PostDetailPage;
