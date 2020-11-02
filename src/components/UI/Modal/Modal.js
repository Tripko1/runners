import React, { Fragment } from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";

const StyledDiv = styled.div`
  position: fixed;
  background-color: #edf5e1;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 1px 1px 1px #379683;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  trnasform: ${props => props.show ? "translateY(0)" : "translateY(-100vh)"};
  opacity: ${props => props.show ? "1" : "0"};
  z-index: ${props => props.show ? "500" : "-1"};

  @media(min-width: 600px){
    width: 500px;
    left: calc(50% - 250px);
  }
`;

const modal = props => {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return (
  //     nextProps.show !== props.show ||
  //     nextProps.children !== props.children
  //   );
  // }

  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <StyledDiv show={props.show}>
        {props.children}
      </StyledDiv>
    </Fragment>
  );
}

export default modal;