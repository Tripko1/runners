import React,{Fragment} from "react";
import Settings from "../../container/Settings/Settings";
import Matrix from "../Matrix/Matrix";
import HelpIcons from "./HelpIcons/HelpIcons";
import * as style from "./style";

const startPanel = (props) => {
    let finish = (
        <Fragment>
            <style.StyledH1>GAME OVER</style.StyledH1>
        </Fragment>
    );
    if(!props.finish){
        finish = (
            <Fragment>
                <style.StyledButton btnType="Success" disabled={props.clickedRun} onClick={() => props.runAlgorithms()}>RUN</style.StyledButton>
                <style.StyledAutorun>
                    <input id="autorun" type="checkbox" />
                    <label htmlFor="autorun">Autorun</label>
                </style.StyledAutorun>
            </Fragment>
        )
    }
    return(
        <style.StyledDiv>
            <style.StyledDivContent>
                <HelpIcons />
                <Settings
                    openModalForLocation={props.openModalForLocation}
                    openModalForSize={props.openModalForSize}
                    openModalForAlgorithms={props.openModalForAlgorithms}
                />
                <Matrix 
                    m={props.m}
                    n={props.n}
                    startX={props.startX}
                    startY={props.startY}
                    endX={props.endX}
                    endY={props.endY}
                    matrix={props.matrix}
                />
                <style.StyledDivRun>
                    {finish}
                </style.StyledDivRun>
            </style.StyledDivContent>
        </style.StyledDiv>
    )
}

export default startPanel;