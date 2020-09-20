import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 580px;
    margin: 0 6px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;

    @media(max-width: 1001px){
        min-width: 370px;
    }

    @media(max-width: 375px){
        min-width: 342px;
    }
`;

const StyledDivContent = styled.div`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 100%;
    position: relative;
    white-space: normal;
    border-radius: 10px;
    border: 3px solid teal;
`;

const runnersPanel = (props) => {
    return(
        <StyledDiv>
            <StyledDivContent>
                ccc
            </StyledDivContent>
        </StyledDiv>
    )
}

export default runnersPanel;