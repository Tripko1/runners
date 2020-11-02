import React,{Fragment} from "react";
import * as style from "./style";

const changePositions = (props) => {
    return (
        <Fragment>
            <style.StyledI className="fa fa-window-close" onClick={() => props.modalClosed()}/>
            <style.StyledDiv>
                <style.StyledH1>Get random Start and End position</style.StyledH1>
                <style.StyledDivForButton>
                    <style.StyledButton btnType="Success" onClick={() => props.generateRandomPosition()}>Random Generator</style.StyledButton>
                </style.StyledDivForButton>
            </style.StyledDiv>
        </Fragment>
    )
}

export default changePositions;