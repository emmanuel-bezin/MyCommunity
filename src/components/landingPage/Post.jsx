import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiLike } from "react-icons/bi";

import theme from "/src/theme";

import useApp from "../store/useApp";

const Likes = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: ${theme.green};
  gap: 5px;
`;

const Category = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 18px;
  background-color: ${({ color }) => color && color};
  cursor: pointer;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  transition: 0.2s ease;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  margin-left: 20px;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    margin-left: 0px;
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  margin: 0px;
  color: ${theme.deepblue};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const MessageContainer = styled.div`
  max-width: 800px;
  max-height: 60px;
  overflow: hidden;
`;

const Title = styled.h1`
  display: flex;
  margin: 0px;
  margin-top: 8px;
  color: ${theme.deepblue};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 500;
`;

const LikesNbr = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  background-color: ${theme.gold};
  border-radius: 20px;
  font-size: 14px;
`;

const DateNTime = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  margin: 0px;
  color: ${theme.grey};
`;

const Pseudo = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  margin: 0px;
  color: ${theme.green};
`;

const InfosContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Container = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 10px ${theme.lightgrey};
  border-radius: 30px;
  width: calc(100% - 40px);
  margin-bottom: 20px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  padding: 20px;
  overflow: hidden;

  &:hover {
    background: ${theme.transgrey};
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;
const Post = ({ post }) => {
  const { setPost } = useApp();

  const linkraw = post.title.replaceAll(" ", "-") + post.id;

  return (
    <Container to={linkraw} onClick={() => setPost(post)}>
      <LeftContainer>
        <InfosContainer>
          <Pseudo>{post.pseudo}</Pseudo>
          <LikesNbr>{post.likesNbr}</LikesNbr>
          <DateNTime>{post.time}</DateNTime>
          <DateNTime>{post.date}</DateNTime>
        </InfosContainer>
        <Title>{post.title}</Title>
        <MessageContainer>
          <Text>{post.message}</Text>
        </MessageContainer>
      </LeftContainer>
      <RightContainer>
        <Category color={post.color}>{post.category}</Category>
        <Likes>
          <BiLike size={22} />
          {post.likesNbr}
        </Likes>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Text style={{ color: theme.green, fontWeight: "600" }}>
            {post.comments.length}
          </Text>
          <Text>comments</Text>
        </div>
      </RightContainer>
    </Container>
  );
};

export default Post;
