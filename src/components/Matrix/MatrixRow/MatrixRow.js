import React from "react";
import styled from "styled-components";
import MatrixField from "./MatrixField/MatrixField";

const StyledDiv = styled.div`
    width: ${props => props.width > 10 ? 400 : props.width * 40 }px;
    height: ${props => props.height > 40 ? 40 : props.height}px;
    margin: 0 auto;
    padding: 0 auto;

    @media(max-width: 1001px){
        width: 370px;
    }

    @media(max-width: 375px){
        width: 342px;
    }
`;

const matrixRow = (props) => {
    const height=parseInt(400 / props.n);
    let i=0;
    const matrixField = (
        <div>
            {
                props.row.map(item => <MatrixField
                        key={i++} 
                        value={item}
                        height={height}
                    />)
            }
        </div>
    )
    return(
        <StyledDiv 
            height={height} 
            width={props.m}
        >
            {matrixField}
        </StyledDiv>
    )
}

export default matrixRow;