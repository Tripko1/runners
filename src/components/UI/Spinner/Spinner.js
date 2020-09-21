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
    position: absolute;
    top: 40px;
    left: calc(50% - 30px);
    z-index: 1;
    border-top: 4px solid #5cdb95;
    border-right: 4px solid #5cdb95;
    border-bottom: 4px solid #5cdb95;
    border-left: 8px solid #379683;
    background: transparent;
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const spinner = () => <StyledDiv />;

export default spinner;
