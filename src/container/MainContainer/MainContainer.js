import React, {Component} from "react";
import styled from "styled-components";
import StartPanel from "../../components/StartPanel/StartPanel";
import LevelPanel from "../../components/LevelPanel/LevelPanel";
import RunnersPanel from "../../components/RunnersPanel/RunnersPanel";
import {connect} from "react-redux";

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
                <StartPanel 
                    m={this.props.m}
                    n={this.props.n}
                    startX={this.props.startX}
                    startY={this.props.startY}
                    endX={this.props.endX}
                    endY={this.props.endY}
                    matrix={this.props.matrix}
                />
                <LevelPanel />
                <RunnersPanel />
            </StyledMain>
        )
    }
}

const mapStateToProps = state => {
    return{
        m: state.m,
        n: state.n,
        startX: state.startX,
        startY: state.startY,
        endX: state.endX,
        endY: state.endY,
        matrix: state.matrix
    }
}

export default connect(mapStateToProps)(MainContainer);