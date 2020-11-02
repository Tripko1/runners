import styled from "styled-components";

export const StyledDiv = styled.div`
    float: left;
    width: ${props => props.height - 2}px;
    height: ${props => props.height - 2}px;
    background-color: ${props => props.value === 0 ? "#ccc" : props.value === 1 ? "#5cdb95" : props.value === 2 ?
    "#5cdb95" : props.value === 3 ? "red" : props.value === 4 ? "yellow" : props.value === 5 ?
    "orange" : props.value === 6 ? "#ff80df" : props.value === 7 ? "#bf8040" : "#1ad1ff"};
    border: 1px solid #379683;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.height > 25 ? "30px" : "15px"};
`;

export const StyledI = styled.i`
    color: ${props => props.color};
`;