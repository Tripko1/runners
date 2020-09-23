import React,{Fragment} from "react";
import styled from "styled-components";
import Settings from "../../container/Settings/Settings";
import Matrix from "../Matrix/Matrix";
import HelpIcons from "./HelpIcons/HelpIcons";
import * as style from "./style";

const StyledButton = styled.button`
    background-color: ${props => props.btnType === "Success" ? "#379683" : "tomato"};
    color: white;
    border: ${props => props.btnType === "Success" ? "1px solid #379683" : "1px solid #944317"};
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;
    z-index: 1;

    &:hover{
        background-color: ${props => props.btnType === "Success" ? "#5cdb95" : "#944317"};
    }
    &:disabled {
        background-color: #484a4d;
        cursor: not-allowed;
    }
`;

const startPanel = (props) => {
    let finish = (
        <Fragment>
            <style.StyledH1>GAME OVER</style.StyledH1>
        </Fragment>
    );
    if(!props.finish){
        finish = (
            <Fragment>
                <StyledButton btnType="Success" disabled={props.clickedRun} onClick={() => props.runAlgorithms()}>RUN</StyledButton>
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