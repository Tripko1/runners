import React, {Component} from "react";
import styled from "styled-components";
import StartPanel from "../../components/StartPanel/StartPanel";
import LevelPanel from "../../components/LevelPanel/LevelPanel";
import RunnersPanel from "../../components/RunnersPanel/RunnersPanel";

const StyledMain = styled.main`
    height: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 10px;
    overflow-x: auto;
    overflow-y: hidden;

    @media(max-width: 1001px){
        justify-content: flex-start;
    }
`;

class MainContainer extends Component{
    render(){
        return(
            <StyledMain>
                <StartPanel />
                <LevelPanel />
                <RunnersPanel />
            </StyledMain>
        )
    }
}

export default MainContainer;