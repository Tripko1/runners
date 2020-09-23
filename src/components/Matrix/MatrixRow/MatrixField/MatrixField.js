import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    float: left;
    width: ${props => props.height - 2}px;
    height: ${props => props.height - 2}px;
    background-color: ${props => props.value === 0 ? "#ccc" : props.value === 1 ? "#5cdb95" : props.value === 2 ?
     "#5cdb95" : props.value === 3 ? "red" : "yellow"};
    border: 1px solid #379683;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${props => props.height > 25 ? "30px" : "15px"};
`;

const StyledI = styled.i`
    color: ${props => props.color};
`;

const matrixField = (props) => {
    return(
            <StyledDiv 
                height={props.height}
                value={props.value}
            >
                {props.value === 1 ? <StyledI color={props.color} className="fa fa-flag"/> : 
                    props.value === 2 ? <StyledI color={props.color} className="fa fa-flag-checkered"/> :
                    props.value === 3 ? <StyledI color={props.color} className="fa fa-tree"/> : null
                }
            </StyledDiv>
    )
}

export default matrixField;