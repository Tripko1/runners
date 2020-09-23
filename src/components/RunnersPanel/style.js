import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 580px;
    margin: 0 6px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;

    @media(max-width: 1001px){
        min-width: 400px;
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

export const StyledTextDiv = styled.div`
    width: 100%;
    padding: 10px;
    height: 90px;
    min-height: 90px;
`;