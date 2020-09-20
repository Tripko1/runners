import React from "react";
import styled from "styled-components";
import Settings from "../../container/Settings/Settings";

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
    height: 100%;
    position: relative;
    white-space: normal;
    border-radius: 10px;
`;

const startPanel = (props) => {
    return(
        <StyledDiv>
            <StyledDivContent>
                <Settings />
            </StyledDivContent>
        </StyledDiv>
    )
}

export default startPanel;