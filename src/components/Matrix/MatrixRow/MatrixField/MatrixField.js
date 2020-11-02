import React from "react";
import * as style from "./style";

const matrixField = (props) => {
    let path=null;
    if(props.pathMATRIX !== undefined && props.pathMATRIX !== 0){
        path = <style.StyledI>{props.pathMATRIX}</style.StyledI>
    }
    return(
            <style.StyledDiv 
                height={props.height}
                value={props.value}
            >
                {props.value === 1 ? <style.StyledI color={props.color} className="fa fa-flag"/> : 
                    props.value === 2 ? <style.StyledI color={props.color} className="fa fa-flag-checkered"/> :
                    props.value === 3 ? <style.StyledI color={props.color} className="fa fa-tree"/> : null
                }
                {path}
            </style.StyledDiv>
    )
}

export default matrixField;