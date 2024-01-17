import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

import theme from "/src/theme";

import filters from "../../sidebar/components/filters";

const Option = styled.div`
  color: ${theme.deepblue};
  padding-left: 5px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */

  &:hover {
    color: ${theme.green};
  }
`;

const Options = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  border: 2px solid ${theme.grey};
  width: calc(100% - 4px);
  height: ${({ isOpen }) => (isOpen ? "150px" : "0px")};
  font-size: 18px;
  gap: 10px;
  background: white;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: 20px;
  left: 0px;
  z-index: 0;
  padding-top: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow-y: scroll;
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-ms-overflow-style {
    display: none;
  }
`;

const Arrow = styled(IoIosArrowDown)`
  transform: ${({ isOpen }) => (isOpen ? "none" : "rotate(-90deg)")};
  transition: 0.4s ease;
`;

const SelectContainer = styled.div`
  display: flex;
  position: relative;
  border: 2px solid ${theme.green};
  border-radius: 20px;
  height: 30px;
  color: ${theme.green};
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 21px;
  padding: 0px 10px;
  align-items: center;
  margin-bottom: 4px;
  gap: 10px;
  width: 90px;
  justify-content: space-between;
  background: white;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  margin-left: 10px;
`;

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <Container>
      <SelectContainer onClick={() => setIsOpen(!isOpen)}>
        {!selected ? "Select" : selected}
        <Arrow size={25} isOpen={isOpen} />
      </SelectContainer>
      <Options isOpen={isOpen}>
        {filters.map((category, idx) => {
          const handleSelect = () => {
            setSelected(category.label), setIsOpen(false);
          };

          return (
            <Option key={category.label} onClick={handleSelect}>
              {category.label}
            </Option>
          );
        })}
      </Options>
    </Container>
  );
};

export default Select;
