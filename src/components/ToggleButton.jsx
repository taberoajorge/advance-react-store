import React from 'react';
import styled from 'styled-components';
import { MoonFill, SunFill } from 'styled-icons/bootstrap';


const StyledToogleContainer = styled.div`
  width: 40px;
  background-color: #c4c4c4;
  cursor: pointer;
  user-select: none;
  border-radius: 30px;
  padding: 2px;
  height: 18px;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const StyledToggle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => (!props.disabled ? '#002b49' : '#707070')};
  color: white;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  min-width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  width: 18px;
  min-width: unset;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0px;
  left: ${props => (!props.disabled ? '22px' : '1px')};
  transition: all 0.3s ease;
`;

function ToggleButton(props) {
  const { selected, toggleSelected } = props;
  return (
    <StyledToogleContainer onClick={() => toggleSelected(prevState => !prevState)}>
      <SunFill color="black" /> <MoonFill color="black" />  
      <StyledToggle disabled={selected}></StyledToggle>
    </StyledToogleContainer>
  );
}

export default ToggleButton;
