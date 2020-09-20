import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    float: left;
    width: ${props => props.height - 2}px;
    height: ${props => props.height - 2}px;
    background-color: ${props => props.value === 0 ? "#ccc" : props.value === 1 ? "#379683" : "#379683"};
    border: 1px solid #379683;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledI = styled.i`
    color: ${props => props.color}
`;

const matrixField = (props) => {
    return(
        <StyledDiv 
            height={props.height}
            value={props.value}
        >
            {props.value === 1 ? <StyledI color="#edf5e1" className="fa fa-flag"/> : 
                props.value === 2 ? <StyledI color="black" className="fa fa-flag-checkered"/> : null
            }
        </StyledDiv>
    )
}

export default matrixField;