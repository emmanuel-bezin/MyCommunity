import styled from "styled-components";
import { FaInfoCircle } from "react-icons/fa";

import theme from "/src/theme";

const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  color: ${theme.grey};
  border-radius: 20px;
  width: 80%;
  padding: 15px;
  text-align: center;
  font-size: 16px;
  box-shadow: 0px 0px 8px ${theme.lightgrey};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Info = () => {
  return (
    <Container>
      <ChildContainer>
        <FaInfoCircle size={20} color={theme.green} />
        <p>
          To comment, post or exchange with everyone, you have to be logged in.
          <br />
          <br />
          If you do not have an account yet, join us by signing up !
        </p>
      </ChildContainer>
    </Container>
  );
};

export default Info;
