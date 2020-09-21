import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 80%;
    margin: 0 auto;
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: #05386b;
`;

const StyledDivForButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledButton = styled.button`
    background-color: ${props => props.btnType === "Success" ? "#5cdb95" : "tomato"};
    color: white;
    border: ${props => props.btnType === "Success" ? "1px solid #379683" : "1px solid #944317"};
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;

    &:hover{
        background-color: ${props => props.btnType === "Success" ? "#379683" : "#944317"};
    }
`;

const changePositions = (props) => {
    return (
        <StyledDiv>
            <StyledH1>Get random Start and End position</StyledH1>
            <StyledDivForButton>
                <StyledButton btnType="Success" onClick={() => props.generateRandomPosition()}>Random Generator</StyledButton>
                <StyledButton btnType="Danger" onClick={() => props.modalClosed()}>Cancel</StyledButton>
            </StyledDivForButton>
        </StyledDiv>
    )
}

export default changePositions;