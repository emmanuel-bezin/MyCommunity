import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack, IoIosSend } from "react-icons/io";

import theme from "/src/theme";

import Post from "./components/Post";
import PostComments from "./components/PostComments";

const SendButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  font-size: 16px;
  height: 40px;
  border: 2px solid ${theme.green};
  outline: none;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  background-color: ${theme.green};
  transition: 0.3s ease;

  &:hover {
    background-color: white;
    color: ${theme.green};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Input = styled.input`
  width: 60%;
  height: 40px;
  padding: 2px 10px;
  font-size: 16px;
  outline: none;
  border-radius: 15px;
  border: 2px solid ${theme.green};

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
  padding-top: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding-left: 0px;
    gap: 10px;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  font-weight: 600;
  font-size: 20px;
  color: ${theme.deepblue};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;

  &:hover {
    color: ${theme.red};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 180px);
  overflow: scroll;
  margin-top: 80px;
  padding: 10px 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-ms-overflow-style {
    display: none;
  }
`;

const CommentsPage = () => {
  return (
    <>
      <Container>
        <div>
          <BackButton to="/">
            <IoIosArrowBack />
            Go back
          </BackButton>
          <Post />
        </div>
        <PostComments />
      </Container>
      <BottomContainer>
        <Input placeholder="Write your comment..." />
        <SendButton>
          <IoIosSend size={20} /> Publish
        </SendButton>
      </BottomContainer>
    </>
  );
};

export default CommentsPage;
