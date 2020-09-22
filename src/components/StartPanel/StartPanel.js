import React from "react";
import styled from "styled-components";
import Settings from "../../container/Settings/Settings";
import Matrix from "../Matrix/Matrix";
import HelpIcons from "./HelpIcons/HelpIcons";

const StyledDiv = styled.div`
    width: 580px;
    margin: 0 6px;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;

    @media(max-width: 1001px){
        min-width: 400px;
    }
`;

const StyledDivContent = styled.div`
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    white-space: normal;
    border-radius: 10px;
`;

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
`;

const StyledDivRun = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
`;

const StyledAutorun = styled.div`
    display: flex;
    align-items: center;
    margin: -20px;
    z-index: 0;
    > input {
    opacity: 0;
    }
    > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    &:before {
        content: '';
        position: absolute;
        left:0; top: 1px;
        width: 17px; height: 17px;
        border: 1px solid #aaa;
        background: #f8f8f8;
        border-radius: 3px;
        box-shadow: inset 0 1px 3px rgba(0,0,0,.3)
    }
    &:after {
        content: '✔';
        position: absolute;
        top: -1px; left: 2px;
        font-size: 16px;
        color: #09ad7e;
        transition: all .2s;
    }
    }
    > input:not(:checked) + label {
        &:after {
        opacity: 0;
        transform: scale(0);
        }
    }
    > input:disabled:not(:checked) + label {
        &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
        }
    }
    > input:checked + label {
    &:after {
        opacity: 1;
        transform: scale(1);
    }
    }
    > input:disabled:checked + label {
    &:after {
        color: #999;
    }
    }
    > input:disabled + label {
    color: #aaa;
    }
    > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
        border: 1px dotted blue;
    }
    }
`;

const startPanel = (props) => {
    return(
        <StyledDiv>
            <StyledDivContent>
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
                <StyledDivRun>
                    <StyledButton btnType="Success" onClick={() => props.runAlgorithms()}>RUN</StyledButton>
                    <StyledAutorun>
                        <input id="autorun" type="checkbox" />
                        <label htmlFor="autorun">Autorun</label>
                    </StyledAutorun>
                </StyledDivRun>
            </StyledDivContent>
        </StyledDiv>
    )
}

export default startPanel;