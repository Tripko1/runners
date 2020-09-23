import React,{Fragment} from "react";
import styled from "styled-components";
import * as style from "./style";

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
        <Fragment>
            <style.StyledI className="fa fa-window-close" onClick={() => props.modalClosed()}/>
            <style.StyledDiv>
                <style.StyledH1>Get random Start and End position</style.StyledH1>
                <style.StyledDivForButton>
                    <StyledButton btnType="Success" onClick={() => props.generateRandomPosition()}>Random Generator</StyledButton>
                </style.StyledDivForButton>
            </style.StyledDiv>
        </Fragment>
    )
}

export default changePositions;