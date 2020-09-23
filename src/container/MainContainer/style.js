import styled from "styled-components";

export const StyledMain = styled.main`
    height: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 10px;
    overflow-x: auto;
    overflow-y: hidden;

    @media(max-width: 1001px){
        justify-content: flex-start;
    }
`;