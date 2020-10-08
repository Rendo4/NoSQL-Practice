import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const HelpQueueHeader = styled.h1`
  font-size: 50px;
  text-center: center;
  color: purple;
`;

const StyledWrapper = styled.section`
  background-color: black;
`;

function Header(){
  return (
    <React.Fragment>
      <StyledWrapper>
      <HelpQueueHeader> FOF To Do List</HelpQueueHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
      </StyledWrapper>
    </React.Fragment>
  );
}

export default Header;