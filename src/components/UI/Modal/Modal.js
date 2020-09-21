import React, { Component, Fragment } from "react";
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

class Modal extends Component {
  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <StyledDiv show={this.props.show}>
          {this.props.children}
        </StyledDiv>
      </Fragment>
    );
  }
}

export default Modal;
