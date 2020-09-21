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

const StyledDivCenter = styled.div`
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

const changeMatrixSize = (props) => {
    return(
        <StyledDiv>
            <StyledH1>Change Matrix size</StyledH1>
            <StyledDivCenter>
                <div>
                    <label for="x">Quantity (between 3 and 20):</label>
                    <input id="x" type="number" min="3" max="20"/>
                </div><br /><br />
            </StyledDivCenter>
            <StyledDivCenter>
                <div>
                    <label for="y">Quantity (between 3 and 20):</label>
                    <input id="y" type="number" min="3" max="20"/>
                </div><br /><br />
            </StyledDivCenter>
            <StyledDivCenter>
                <StyledButton btnType="Success">Submit</StyledButton>
                <StyledButton btnType="Danger" onClick={() => props.modalClosed()}>Cancel</StyledButton>
            </StyledDivCenter>
        </StyledDiv>
    )
}

export default changeMatrixSize;