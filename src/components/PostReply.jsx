import React, { useEffect } from 'react';
import styled from 'styled-components';
import PostStore from '../store/PostStore';
import UserStore from '../store/UserStore';

const All = styled.div`
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 8px;
  margin: 0 10px;
`;

const NikName = styled.h3`
  text-align: left;
  padding: 0 30px;
  margin: 10px 0;
`;

const ReplyArea = styled.div`
  width: 100%;
`;

const Reply = styled.textarea`
  width: 100%;
  resize: none;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  color: #575757;
`;

const DateDiv = styled.div`
  padding: 10px 30px;
  text-align: left;
`;

const PostReply = ({ param }) => {
  const { replies, getReply } = PostStore();

  useEffect(() => {
    getReply(param.board_no);
  }, []);

  return (
    <>
      {replies.map((reply) => (
        <All key={reply.reply_id}>
          <Main>
            <Img src={reply.userThumbnail} alt="프로필사진" />
            <ReplyArea>
              <NikName>{reply.userNikName}</NikName>
              <Reply readOnly defaultValue={reply.replyContent}></Reply>
              <DateDiv>
                <span>{reply.create_date}</span>
              </DateDiv>
            </ReplyArea>
          </Main>
        </All>
      ))}
    </>
  );
};

export default PostReply;
