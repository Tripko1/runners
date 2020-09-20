import React from "react";
import styled from "styled-components";
import 'font-awesome/css/font-awesome.min.css';

const StyledDiv = styled.div`
    height: 40px;
    background-color: white;
    color: #05386B;
    display: flex;
    align-items: center;
    justify-content: left;
    font-weight: 900;

    &:hover{
        background-color: #EDF5E1;
    }
`;

const StyledI = styled.i`
    color: #379683;
    padding: 0 5px;
    width: 15px;
    text-algin: center;
`;

const dropdownItem = (props) => {
    return (
        <StyledDiv>
            {props.icon ? <StyledI className={props.icon} />  : null}
            {props.children}
        </StyledDiv>
    )
}

export default dropdownItem;