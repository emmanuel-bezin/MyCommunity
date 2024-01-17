import { useState } from "react";
import styled from "styled-components";

import useApp from "../../store/useApp";
import theme from "/src/theme";

import filters from "./filters";

const Category = styled.div`
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 18px;
  border: 2px solid ${({ color }) => color};
  cursor: pointer;
  color: ${({ color, negative }) => (negative ? color : "white")};
  background-color: ${({ color, negative }) => (negative ? "white" : color)};
  transition: 0.2s ease;

  &:hover {
    color: ${({ color }) => color && color};
    background-color: white;
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${theme.grey};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
  justify-content: center;
  height: 100%;

  @media (max-width: 768px) {
    height: auto;
    margin: 0px;
  }
`;

const Categories = () => {
  const { filter, setFilter } = useApp();

  return (
    <Container>
      <ChildContainer>
        <p style={{ fontSize: 25 }}>Categories</p>
        <CategoriesContainer>
          {filters.map((category, idx) => {
            let negative;
            if (filter === category.label) {
              negative = true;
            }

            return (
              <Category
                negative={negative}
                key={idx}
                color={category.color}
                onClick={() => setFilter(category.label)}
              >
                {category.label}
              </Category>
            );
          })}
        </CategoriesContainer>
      </ChildContainer>
    </Container>
  );
};

export default Categories;
