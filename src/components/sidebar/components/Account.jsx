import styled from "styled-components";

import theme from "/src/theme";

const LogInButton = styled.div`
  display: flex;
  border: 2px solid ${theme.green};
  border-radius: 14px;
  padding: 5px 10px;
  font-size: 18px;
  color: white;
  background-color: ${theme.green};
  font-weight: 500;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: ${theme.green};
    background-color: white;
  }
`;

const SignUpButton = styled.div`
  display: flex;
  border: 2px solid ${theme.lightgrey};
  border-radius: 14px;
  padding: 5px 10px;
  font-size: 18px;
  color: ${theme.lightgrey};
  font-weight: 500;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: white;
    background-color: ${theme.lightgrey};
  }
`;

const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px;
  width: 80%;
  padding: 10px 15px;
  box-shadow: 0px 0px 8px ${theme.lightgrey};

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  margin: 15px 0px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 0px;
  }
`;

const Account = () => {
  return (
    <Container>
      <ChildContainer>
        <SignUpButton>Sign up</SignUpButton>
        <LogInButton>Log in</LogInButton>
      </ChildContainer>
    </Container>
  );
};

export default Account;
