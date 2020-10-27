import React, {Component, Fragment} from "react";
import StartPanel from "../../components/StartPanel/StartPanel";
import LevelPanel from "../../components/LevelPanel/LevelPanel";
import RunnersPanel from "../../components/RunnersPanel/RunnersPanel";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import ChangePositions from "../../components/ChangePositions/ChangePositions";
import ChangeMatrixSize from "../ChangeMatrixSize/ChangeMatrixSize";
import ChangeAlgorithms from "../ChangeAlgorithms/ChangeAlgorithms";
import {connect} from "react-redux";
import { bfs} from "../../algorithms/bfs";
import { dijkstra } from "../../algorithms/dijkstra";
import { dfs } from "../../algorithms/dfs";
import * as style from "./style";
import * as actions from "../../store/actions/index";

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

            if(Xstart === Xend){
                if(Ystart > Yend+1){
                    break;
                }
                else if(Yend > Ystart+1){
                    break;
                }
            }

            if(Ystart === Yend){
                if(Xstart > Xend+1){
                    break;
                }
                else if(Xend > Xstart+1){
                    break;
                }
            }
            
            if(Xstart !== Xend && Ystart !== Yend){
                break;
            }
        }
        this.props.onGetRandomPositions(Xstart,Ystart,Xend,Yend);
        setTimeout(() => {
            this.closeModalForLocation();
        }, 1100);
    }

    newRandomBlock = () => {
        let Xblock,Yblock;
        let pomMatrix = [...this.props.matrix];
        for(let i=0; i<pomMatrix.length; i++){
            pomMatrix[i] = [...this.props.matrix[i]];
        }

        while(1){
            Xblock = this.getRandomInt(this.props.m);
            Yblock = this.getRandomInt(this.props.n);
            let pomMatrixBFS = [...this.props.matrixPATH];
            for(let i=0; i<pomMatrixBFS.length; i++){
                pomMatrixBFS[i] = [...this.props.matrixPATH[i]];
            }
            if(pomMatrix[Yblock][Xblock] === 0){
                pomMatrix[Yblock][Xblock] = 3;
                pomMatrixBFS[Yblock][Xblock] = 3;
                let obj = bfs(this.props,pomMatrix);
                if(obj.path){
                    break;
                }
                let ind=0;
                for(let i=0; i<this.props.n; i++){
                    for(let j=0; j<this.props.m; j++){
                        if(pomMatrixBFS[i][j] === 0){
                            ind++;
                        }
                    }
                }
                if(ind === 0){
                    this.props.onFinishGAME();
                    break;
                }
                pomMatrix[Yblock][Xblock] = 0;
                pomMatrixBFS[Yblock][Xblock] = 0;
            }
        }
        return pomMatrix;
    }

    openLevel = (level) => {
        let t=0;
        if(this.props.algorithms[0].checked){
            const n=this.props.bfsArray.length;
            for(let i=0; i<n; i++){
                if(this.props.bfsArray[i].level === level){
                    //dugme disabled
                    //barijere nisu dobre za dati nivo, uzimaju se za poslednji samo
                    setTimeout(() => {
                    this.startRunning(this.props.bfsArray[i],"BFS",this.props.bfsArray[i].matrix);
                    },(t++)*1500);
                    break;
                }
            }
        }
    }

    startRunning = (obj,alg,matrix) => {
        const rec = obj.reconstruction;
        let mat = [...matrix];
        for(let i=0; i<mat.length; i++){
            mat[i] = [...matrix[i]];
        }
        let matPath = [];
        for(let i=0; i<this.props.n; i++){
            matPath.push([]);
            for(let j=0; j<this.props.m; j++){
                matPath[i][j]=0;
            }
        }
        let counter=1;
        if(alg === "BFS"){
            for(let i=1; i<rec.length-1; i++){
                mat[rec[i].i][rec[i].j] = 4;
                matPath[rec[i].i][rec[i].j] = counter++;
            }
        }
        else if(alg === "DIJKSTRA"){
            matPath = [];
            for(let i=0; i<this.props.n; i++){
                matPath.push([]);
                for(let j=0; j<this.props.m; j++){
                    matPath[i][j]=0;
                }
            }
            counter=1;
            for(let i=1; i<rec.length-1; i++){
                mat[rec[i].i][rec[i].j] = 5;
                matPath[rec[i].i][rec[i].j] = counter++;
            }
        }
        else if(alg === "DFS"){
            matPath = [];
            for(let i=0; i<this.props.n; i++){
                matPath.push([]);
                for(let j=0; j<this.props.m; j++){
                    matPath[i][j]=0;
                }
            }
            counter=1;
            for(let i=1; i<rec.length-1; i++){
                mat[rec[i].i][rec[i].j] = 6;
                matPath[rec[i].i][rec[i].j] = counter++;
            }
        }
        this.props.onSetMatrixBFS(mat,alg,matPath);
    }

    runAlgorithms = () => {
        let t=0;
        if(this.props.algorithms[0].checked){
            setTimeout(() => {
                let obj=bfs(this.props,null);
                this.props.onBfs(obj);
                this.props.onResetMatrixPATH();
                this.startRunning(obj,"BFS",this.props.matrixPATH);
                //console.log("BFS");
            }, (t++)*1500);
        }
        if(this.props.algorithms[1].checked){
            setTimeout(() => {
                let obj=dfs(this.props);
                this.props.onDfs(obj);
                this.props.onResetMatrixPATH();
                this.startRunning(obj,"DFS",this.props.matrixPATH);
                //console.log("DFS");
            }, (t++)*1500);
        }
        if(this.props.algorithms[2].checked){
            setTimeout(() => {
                let obj = dijkstra(this.props);
                this.props.onDijkstra(obj);
                this.props.onResetMatrixPATH();
                this.startRunning(obj,"DIJKSTRA",this.props.matrixPATH);
                //console.log("DIJKSTRA");
            }, (t)*1500);
        }
        if(this.props.algorithms[4].checked){
            console.log("floyd");
        }

        setTimeout(() => {
            this.props.onLevelFinish(this.newRandomBlock());
        }, (++t)*1500);
    }

    componentDidMount(){
        this.props.onCreateConnectivityMatrix();
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
                    onCreateConnectivityMatrix={this.props.onCreateConnectivityMatrix}
                />
            </Modal>
        )

        const modalChangeAlgorithms = (
            <Modal
                show={this.state.showAlgorithms}
                modalClosed={this.closeModalForAlgorithms}
            >
                <ChangeAlgorithms 
                    modalClosed={this.closeModalForAlgorithms}
                    onSelectAlgorithms={this.props.onSelectAlgorithms}
                    algorithms={this.props.algorithms}
                />
            </Modal>
        )
        return(
            <Fragment>
                {spinner}
                <style.StyledMain>
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
                        runAlgorithms={this.runAlgorithms}
                        clickedRun={this.props.clickedRun}
                        finish={this.props.finish}
                    />
                    <LevelPanel 
                        levelsArray={this.props.levelsArray}
                        openLevel={this.openLevel}
                    />
                    <RunnersPanel 
                        m={this.props.m}
                        n={this.props.n}
                        startX={this.props.startX}
                        startY={this.props.startY}
                        endX={this.props.endX}
                        endY={this.props.endY}
                        matrixBFS={this.props.matrixPATH}
                        clickedRun={this.props.clickedRun}
                        bfsArray={this.props.bfsArray}
                        algorithmName={this.props.algorithmName}
                        pathMATRIX={this.props.pathMATRIX}
                    />
                    {modalChangeLoaction}
                    {modalChangeSize}
                    {modalChangeAlgorithms}
                </style.StyledMain>
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
        loading: state.loading,
        algorithms: state.algorithms,
        graph: state.graph,
        level: state.level,
        bfsArray: state.bfsArray,
        clickedRun: state.clickedRun,
        matrixPATH: state.matrixPATH,
        finish: state.finish,
        algorithmName: state.algorithmName,
        levelsArray: state.levelsArray,
        pathMATRIX: state.pathMATRIX
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onGetRandomPositions: (Xstart,Ystart,Xend,Yend,m,n) => dispatch(actions.getRandomPositions(Xstart,Ystart,Xend,Yend)),
        onChangeMatrixDimension: (rows,columns) => dispatch(actions.changeMatrixDimension(rows,columns)),
        onSelectAlgorithms: (algorithms) => dispatch(actions.selectAlgorithms(algorithms)),
        onCreateConnectivityMatrix: () => dispatch(actions.createConnectivityMatrix()),
        onBfs: (obj) => dispatch(actions.bfs(obj)),
        onSetMatrixBFS: (mat,alg,matPath) => dispatch(actions.setMatrixBFS(mat,alg,matPath)),
        onLevelFinish: (mat) => dispatch(actions.levelFinish(mat)),
        onFinishGAME: () => dispatch(actions.finishGame()),
        onDijkstra: (obj) => dispatch(actions.dijkstra(obj)),
        onDfs: (obj) => dispatch(actions.dfs(obj)),
        onResetMatrixPATH: () => dispatch(actions.resetMatrixPATH())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);