import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { FaCirclePlus } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import theme from "/src/theme";

import Sidebar from "./sidebar/Sidebar";

const ResponsiveMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  position: absolute;
  top: ${({ menuOpen }) => (menuOpen ? "0%" : "-100%")};
  height: 100vh;
  width: 100vw;
  z-index: 1;

  @media (max-width: 433px) {
    justify-content: flex-end;
  }
`;

const CloseMenu = styled(IoMdClose)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const OpenMenu = styled(IoMdMenu)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  display: none;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Button = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: ${theme.green};
  display: flex;
  cursor: pointer;
  padding: 8px;
  border-radius: 15px;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;
  border: 2px solid transparent;
  margin-right: 15px;

  &:hover {
    background-color: white;
    color: ${theme.green};
    border: 2px solid ${theme.green};
  }
`;

const ResponsiveButton = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Crown = styled.img`
  color: ${theme.gold};
  height: 50px;
  position: absolute;
  right: -25px;
  top: -25px;
`;

const Title = styled.div`
  font-size: 30px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: 2px solid ${theme.gold};
  border-radius: 20px;
  padding: 5px;
  background-color: ${theme.gold};
  color: white;
  box-shadow: 0px 1px 5px ${theme.grey};
`;

const Community = styled(Link)`
  text-decoration: none;
  display: flex;
  position: relative;
  margin-left: 5px;
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  height: 70px;
  width: calc(100% - 320px);
  max-width: 1080px;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    z-index: 2;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Container>
        <Community to="/">
          <Title>My Community</Title>
          <Crown src="./crown.svg" />
        </Community>
        <ResponsiveButton>
          <Button to="/newPost">
            <FaCirclePlus />
            New Post
          </Button>
        </ResponsiveButton>
        <ButtonContainer>
          {!menuOpen ? (
            <OpenMenu size={35} onClick={() => setMenuOpen(true)} />
          ) : (
            <CloseMenu size={35} onClick={() => setMenuOpen(false)} />
          )}
        </ButtonContainer>
      </Container>
      <ResponsiveMenu menuOpen={menuOpen}>
        <Button to="/newPost">
          <FaCirclePlus />
          New Post
        </Button>
        <Sidebar />
      </ResponsiveMenu>
    </>
  );
};

export default Navbar;
