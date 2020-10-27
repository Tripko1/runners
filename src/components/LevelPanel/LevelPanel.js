import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 300px;
    margin: 0 6px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;

    @media(max-width: 1001px){
        min-width: 224px;
    }

    @media(max-width: 375px){
        min-width: 234px;
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

const StyledH1 = styled.h1`
    text-align: center;
    color: #05386B;
`;

const StyledI = styled.i`
    padding: 2px;
    color: #379683;
`;

const StyleCenter = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px 0;
    margin: 0 20px;
    border-bottom: 1px solid #379683;
`;

const StyledButton = styled.button`
    margin-left: 10px;
    color: #ccc;
    cursor: pointer;
`;

const StyleSpan = styled.span`
    font-size: 20px;
`;

const StyleHeader = styled.div`
    width: 90%;
    padding: 10px;
    height: 90px;
    min-height: 90px;
`;

const StyledDivLevels = styled.div`
    padding: 20px 0;
    overflow-Y: auto;
`;

const levelPanel = (props) => {
    const levels = props.levelsArray.map(item => (
        <StyleCenter key={item}>
            <StyleSpan>{"Level "+item}</StyleSpan>
            <StyledButton alt="aaa" onClick={() => props.openLevel(item)}>
                <StyledI className="fa fa-spinner"/>
            </StyledButton>
        </StyleCenter>
    ))
    return(
        <StyledDiv>
            <StyledDivContent>
                <StyleHeader>
                    <StyledH1>DATA SCREEN</StyledH1>
                </StyleHeader>
                <StyledDivLevels>
                    {levels}
                </StyledDivLevels>
            </StyledDivContent>
        </StyledDiv>
    )
}

export default levelPanel;