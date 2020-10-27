import React from "react";
import styled from "styled-components";
import MatrixField from "./MatrixField/MatrixField";

const StyledDiv = styled.div`
    width: ${props => props.width}px;
    margin: 0 auto;
`;

const matrixRow = (props) => {
    let height;
    if(props.n > props.m){
        height=parseInt(400 / props.n);
    }
    else{
        height=parseInt(400 / props.m);
    }
    const width = height * props.m;
    let i=0;
    const matrixField = (
        <div>
            {
                props.row.map(item => <MatrixField
                        key={i++} 
                        value={item}
                        height={height}
                        color={item === 1 ? "#edf5e1" : item === 2 ? "black" : "#379683"}
                        pathMATRIX={props.pathMATRIX !== undefined ? props.pathMATRIX[i-1] : undefined}
                    />)
            }
        </div>
    )
    return(
        <StyledDiv width={width}>
            {matrixField}
        </StyledDiv>
    )
}

export default matrixRow;