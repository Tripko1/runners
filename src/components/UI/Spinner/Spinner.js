import React from "react";
import styled,{ keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledDiv = styled.div`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
  
    border-top: 2px solid #379683;
    border-right: 2px solid #379683;
    border-bottom: 2px solid #379683;
    border-left: 4px solid black;
    background: transparent;
    width: 44px;
    height: 44px;
    border-radius: 50%;
`;

const spinner = () => <StyledDiv />;

export default spinner;
