import styled from "styled-components";

import useApp from "../store/useApp";

import posts from "../posts";
import Post from "./Post";

const Container = styled.div`
  margin-top: 80px;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-ms-overflow-style {
    display: none;
  }

  @media (max-width: 768px) {
  }
`;

const LandingPage = () => {
  const { filter } = useApp();
  return (
    <Container>
      {posts.map((post, idx) => {
        return (
          <div key={idx}>
            {filter === "All" ? (
              <Post post={post} />
            ) : (
              post.category === filter && <Post post={post} />
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default LandingPage;
