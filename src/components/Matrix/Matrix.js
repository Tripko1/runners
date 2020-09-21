import React, {Fragment} from "react";
import styled from "styled-components";
import MatrixRow from "./MatrixRow/MatrixRow";

const StyledDiv = styled.div`
    margin: auto;
    width: 400px;

    @media(max-width: 1001px){
        min-width: 400px;
    }
`;

const matrix = (props) => {
    let i=0;
    const displayMatrix = (
        <StyledDiv>
            {
             props.matrix.map(row => <MatrixRow 
                key={i++} 
                row={row}
                n={props.n}
                m={props.m}
             />) }
        </StyledDiv>
    );
    return(
        <Fragment>
            {displayMatrix}
        </Fragment>
    )
}

export default matrix;