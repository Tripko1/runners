import React, {Fragment} from "react";
import MatrixRow from "./MatrixRow/MatrixRow";
import * as style from "./style";

const matrix = (props) => {
    let i=0;
    const displayMatrix = (
        <style.StyledDiv>
            {
             props.matrix.map(row => <MatrixRow 
                key={i++} 
                row={row}
                n={props.n}
                m={props.m}
                pathMATRIX={props.pathMATRIX !== undefined ? props.pathMATRIX[i-1] : undefined}
             />) }
        </style.StyledDiv>
    );
    return(
        <Fragment>
            {displayMatrix}
        </Fragment>
    )
}

export default matrix;