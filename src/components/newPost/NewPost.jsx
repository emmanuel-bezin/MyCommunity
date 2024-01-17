import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPenAlt } from "react-icons/fa";

import theme from "/src/theme";

import PostTitle from "./components/PostTitle";
import PostCategories from "./components/PostCategories";
import Message from "./components/Message";

const PublishButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: ${theme.green};
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 50px;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  align-items: center;
  transition: 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background-color: white;
    color: ${theme.green};
    border: 2px solid ${theme.green};
  }
`;

const CancelButton = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: ${theme.grey};
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 50px;
  font-size: 18px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  align-items: center;
  transition: 0.3s ease;
  border: 2px solid transparent;
  margin-left: 15px;

  &:hover {
    background-color: white;
    color: ${theme.grey};
    border: 2px solid ${theme.grey};
  }
`;

const Title = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${theme.green};
`;

const TitleButton = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
`;

const NewPost = () => {
  return (
    <Container>
      <TitleButton>
        <Title>New Post</Title>
        <CancelButton to="/">Cancel</CancelButton>
      </TitleButton>
      <PostTitle />
      <PostCategories />
      <Message />
      <PublishButton>
        <FaPenAlt style={{ marginRight: 10 }} />
        Publish my Post
      </PublishButton>
    </Container>
  );
};

export default NewPost;
