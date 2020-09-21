import React, {Component, Fragment} from "react";
import styled from "styled-components";
import StartPanel from "../../components/StartPanel/StartPanel";
import LevelPanel from "../../components/LevelPanel/LevelPanel";
import RunnersPanel from "../../components/RunnersPanel/RunnersPanel";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import ChangePositions from "../../components/ChangePositions/ChangePositions";
import ChangeMatrixSize from "../ChangeMatrixSize/ChangeMatrixSize";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";

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
    state={
        showLocation: false,
        showSize: false,
        showAlgorithms: false,
    }

    openModalForLocation = () => {
        this.setState({ showLocation: true })
    }

    closeModalForLocation = () => {
        this.setState({ showLocation: false })
    }

    openModalForSize = () => {
        this.setState({ showSize: true })
    }

    closeModalForSize = () => {
        this.setState({ showSize: false })
    }

    openModalForAlgorithms = () => {
        this.setState({ showAlgorithms: true })
    }

    closeModalForAlgorithms = () => {
        this.setState({ showAlgorithms: false })
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
      }

    generateRandomPosition = () => {
        const Xstart = this.getRandomInt(this.props.m);
        const Ystart = this.getRandomInt(this.props.n);
        let Xend,Yend;
        while(1){
            Xend = this.getRandomInt(this.props.m);
            Yend = this.getRandomInt(this.props.n);
            if(Xstart !== Xend || Ystart !== Yend){
                break;
            }
        }
        this.props.onGetRandomPositions(Xstart,Ystart,Xend,Yend);
        setTimeout(() => {
            this.closeModalForLocation();
        }, 1100);
    }

    render(){
        let spinner = null;
        if(this.props.loading){
            spinner = <Spinner />;
        }
        const modalChangeLoaction = (
            <Modal
                show={this.state.showLocation}
                modalClosed={this.closeModalForLocation}
            >
                <ChangePositions 
                    modalClosed={this.closeModalForLocation}
                    generateRandomPosition={this.generateRandomPosition}
                    loading={this.props.loading}
                />
            </Modal>
        )

        const modalChangeSize= (
            <Modal
                show={this.state.showSize}
                modalClosed={this.closeModalForSize}
            >
                <ChangeMatrixSize 
                    modalClosed={this.closeModalForSize}
                    onChangeMatrixDimension={this.props.onChangeMatrixDimension}
                    onGetRandomPositions={this.props.onGetRandomPositions}
                    getRandomInt={this.getRandomInt}
                />
            </Modal>
        )

        const modalChangeAlgorithms = (
            <Modal
                show={this.state.showAlgorithms}
                modalClosed={this.closeModalForAlgorithms}
            >
                ccc
            </Modal>
        )

        return(
            <Fragment>
                {spinner}
                <StyledMain>
                    <StartPanel 
                        m={this.props.m}
                        n={this.props.n}
                        startX={this.props.startX}
                        startY={this.props.startY}
                        endX={this.props.endX}
                        endY={this.props.endY}
                        matrix={this.props.matrix}
                        openModalForLocation={this.openModalForLocation}
                        openModalForSize={this.openModalForSize}
                        openModalForAlgorithms={this.openModalForAlgorithms}
                    />
                    <LevelPanel />
                    <RunnersPanel />
                    {modalChangeLoaction}
                    {modalChangeSize}
                    {modalChangeAlgorithms}
                </StyledMain>
            </Fragment>
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
        matrix: state.matrix,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetRandomPositions: (Xstart,Ystart,Xend,Yend,m,n) => dispatch(actions.getRandomPositions(Xstart,Ystart,Xend,Yend)),
        onChangeMatrixDimension: (rows,columns) => dispatch(actions.changeMatrixDimension(rows,columns))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);