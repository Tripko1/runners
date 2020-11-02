import styled from "styled-components";

export const StyledDiv = styled.div`
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

export const StyledDivContent = styled.div`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    white-space: normal;
    border-radius: 10px;
`;

export const StyledH1 = styled.h1`
    text-align: center;
    color: #05386B;
`;

export const StyledI = styled.i`
    padding: 2px;
    color: #379683;
`;

export const StyleCenter = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px 0;
    margin: 0 20px;
    border-bottom: 1px solid #379683;
`;

export const StyledButton = styled.button`
    margin-left: 10px;
    color: #ccc;
    cursor: pointer;
`;

export const StyleSpan = styled.span`
    font-size: 20px;
`;

export const StyleHeader = styled.div`
    width: 90%;
    padding: 10px;
    height: 90px;
    min-height: 90px;
`;

export const StyledDivLevels = styled.div`
    padding: 20px 0;
    overflow-Y: auto;
`;