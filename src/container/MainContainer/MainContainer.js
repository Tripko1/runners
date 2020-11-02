import React, { Fragment, useState, useEffect, useCallback } from "react";
import StartPanel from "../../components/StartPanel/StartPanel";
import LevelPanel from "../../components/LevelPanel/LevelPanel";
import RunnersPanel from "../../components/RunnersPanel/RunnersPanel";
import Modal from "../../components/UI/Modal/Modal";
import Spinner from "../../components/UI/Spinner/Spinner";
import ChangePositions from "../../components/ChangePositions/ChangePositions";
import ChangeMatrixSize from "../ChangeMatrixSize/ChangeMatrixSize";
import ChangeAlgorithms from "../ChangeAlgorithms/ChangeAlgorithms";
import { useDispatch, useSelector} from "react-redux";
import { bfs} from "../../algorithms/bfs";
import { dijkstra } from "../../algorithms/dijkstra";
import { dfs } from "../../algorithms/dfs";
import * as style from "./style";
import * as actions from "../../store/actions/index";

const MainContainer = props => {
    const [showLocation, setShowLocation] = useState(false);
    const [showSize, setShowSize] = useState(false);
    const [showAlgorithms, setShowAlgorithms] = useState(false);

    const m = useSelector(state => state.m);
    const n = useSelector(state => state.n);
    const startX = useSelector(state => state.startX);
    const startY = useSelector(state => state.startY);
    const endX = useSelector(state => state.endX);
    const endY = useSelector(state => state.endY);
    const matrix = useSelector(state => state.matrix);
    const loading = useSelector(state => state.loading);
    const algorithms = useSelector(state => state.algorithms);
    const graph = useSelector(state => state.graph);
    const level = useSelector(state => state.level);
    const bfsArray = useSelector(state => state.bfsArray);
    const clickedRun = useSelector(state => state.clickedRun);
    const matrixPATH = useSelector(state => state.matrixPATH);
    const finish = useSelector(state => state.finish);
    const algorithmName = useSelector(state => state.algorithmName);
    const levelsArray = useSelector(state => state.levelsArray);
    const pathMATRIX = useSelector(state => state.pathMATRIX);
    const dfsArray = useSelector(state => state.dfsArray);
    const dijkstraArray = useSelector(state => state.dijkstraArray);

    const dispatch = useDispatch();
    const onGetRandomPositions = (Xstart,Ystart,Xend,Yend,m,n) => dispatch(actions.getRandomPositions(Xstart,Ystart,Xend,Yend));
    const onChangeMatrixDimension = (rows,columns) => dispatch(actions.changeMatrixDimension(rows,columns));
    const onSelectAlgorithms = (algorithms) => dispatch(actions.selectAlgorithms(algorithms));
    const onCreateConnectivityMatrix = useCallback(() => dispatch(actions.createConnectivityMatrix()),[dispatch]);
    const onBfs = (obj) => dispatch(actions.bfs(obj));
    const onSetMatrixBFS = (mat,alg,matPath) => dispatch(actions.setMatrixBFS(mat,alg,matPath));
    const onLevelFinish = (mat) => dispatch(actions.levelFinish(mat));
    const onFinishGAME = () => dispatch(actions.finishGame());
    const onDijkstra = (obj) => dispatch(actions.dijkstra(obj));
    const onDfs = (obj) => dispatch(actions.dfs(obj));
    const onResetMatrixPATH = () => dispatch(actions.resetMatrixPATH());
    const onFinishTestLevel = () => dispatch(actions.finishTestLevel());
    const onRememberMainMatrix = () => dispatch(actions.rememberMainMatrix());

    const propsObject = {
        matrix: matrix,
        n: n,
        m: m,
        startX: startX,
        startY: startY,
        graph: graph,
        endX: endX,
        endY: endY,
        level: level
    }

    const openModalForLocation = () => {
        setShowLocation(true);
    }

    const closeModalForLocation = () => {
        setShowLocation(false);
    }

    const openModalForSize = () => {
        setShowSize(true);
    }

    const closeModalForSize = () => {
        setShowSize(false);
    }

    const openModalForAlgorithms = () => {
        setShowAlgorithms(true);
    }

    const closeModalForAlgorithms = () => {
        setShowAlgorithms(false);
    }

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const generateRandomPosition = () => {
        const Xstart = getRandomInt(m);
        const Ystart = getRandomInt(n);
        let Xend,Yend;
        while(1){
            Xend = getRandomInt(m);
            Yend = getRandomInt(n);

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
        onGetRandomPositions(Xstart,Ystart,Xend,Yend);
        setTimeout(() => {
            closeModalForLocation();
        }, 1100);
    }

    const newRandomBlock = () => {
        let Xblock,Yblock;
        let pomMatrix = [...matrix];
        for(let i=0; i<pomMatrix.length; i++){
            pomMatrix[i] = [...matrix[i]];
        }

        while(1){
            Xblock = getRandomInt(m);
            Yblock = getRandomInt(n);
            let pomMatrixBFS = [...matrixPATH];
            for(let i=0; i<pomMatrixBFS.length; i++){
                pomMatrixBFS[i] = [...matrixPATH[i]];
            }
            if(pomMatrix[Yblock][Xblock] === 0){
                pomMatrix[Yblock][Xblock] = 3;
                pomMatrixBFS[Yblock][Xblock] = 3;
                let obj = bfs(propsObject,pomMatrix);
                if(obj.path){
                    break;
                }
                let ind=0;
                for(let i=0; i<n; i++){
                    for(let j=0; j<m; j++){
                        if(pomMatrixBFS[i][j] === 0){
                            ind++;
                        }
                    }
                }
                if(ind === 0){
                    onFinishGAME();
                    break;
                }
                pomMatrix[Yblock][Xblock] = 0;
                pomMatrixBFS[Yblock][Xblock] = 0;
            }
        }
        return pomMatrix;
    }

    const openLevel = (level) => {
        onRememberMainMatrix();
        let t=0;
        const n=bfsArray.length;
        for(let i=0; i<n; i++){
            if(bfsArray[i].level === level){
                //dugme disabled
                setTimeout(() => {
                    startRunning(bfsArray[i],"BFS", bfsArray[i].matrix);
                },(t++)*1500);
                break;
            }
        }
        const m=dfsArray.length; 
        for(let i=0; i<m; i++){
            if(dfsArray[i].level === level){
                setTimeout(() => {
                    startRunning(dfsArray[i],"DFS", dfsArray[i].matrix);
                },(t++)*1500);
                break;
            }
        }
        const q=dijkstraArray.length; 
        for(let i=0; i<q; i++){
            if(dijkstraArray[i].level === level){
                setTimeout(() => {
                    startRunning(dijkstraArray[i],"DIJKSTRA", dijkstraArray[i].matrix);
                },(t++)*1500);
                break;
            }
        }
        setTimeout(() => {
            onFinishTestLevel();
        },t*1500);
    }

    const startRunning = (obj,alg,matrica) => {
        const rec = obj.reconstruction;
        let mat = [...matrica];
        for(let i=0; i<mat.length; i++){
            mat[i] = [...matrica[i]];
        }
        let matPath = [];
        for(let i=0; i<n; i++){
            matPath.push([]);
            for(let j=0; j<m; j++){
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
            for(let i=0; i<n; i++){
                matPath.push([]);
                for(let j=0; j<m; j++){
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
            for(let i=0; i<n; i++){
                matPath.push([]);
                for(let j=0; j<m; j++){
                    matPath[i][j]=0;
                }
            }
            counter=1;
            for(let i=1; i<rec.length-1; i++){
                mat[rec[i].i][rec[i].j] = 6;
                matPath[rec[i].i][rec[i].j] = counter++;
            }
        }
        onSetMatrixBFS(mat,alg,matPath);
    }

    const runAlgorithms = () => {
        let t=0;
        if(algorithms[0].checked){
            setTimeout(() => {
                let obj=bfs(propsObject,null);
                onBfs(obj);
                onResetMatrixPATH();
                startRunning(obj,"BFS",matrixPATH);
                //console.log("BFS");
            }, (t++)*1500);
        }
        if(algorithms[1].checked){
            setTimeout(() => {
                let obj=dfs(propsObject);
                onDfs(obj);
                onResetMatrixPATH();
                startRunning(obj,"DFS",matrixPATH);
                //console.log("DFS");
            }, (t++)*1500);
        }
        if(algorithms[2].checked){
            setTimeout(() => {
                let obj = dijkstra(propsObject);
                onDijkstra(obj);
                onResetMatrixPATH();
                startRunning(obj,"DIJKSTRA",matrixPATH);
                //console.log("DIJKSTRA");
            }, (t)*1500);
        }
        if(algorithms[4].checked){
            console.log("floyd");
        }

        setTimeout(() => {
            onLevelFinish(newRandomBlock());
        }, (++t)*1500);
    }

    useEffect(() => {
        onCreateConnectivityMatrix();
    },[onCreateConnectivityMatrix]);


    let spinner = null;
    if(loading){
        spinner = <Spinner />;
    }
    const modalChangeLoaction = (
        <Modal
            show={showLocation}
            modalClosed={closeModalForLocation}
        >
            <ChangePositions 
                modalClosed={closeModalForLocation}
                generateRandomPosition={generateRandomPosition}
                loading={loading}
            />
        </Modal>
    )

    const modalChangeSize= (
        <Modal
            show={showSize}
            modalClosed={closeModalForSize}
        >
            <ChangeMatrixSize 
                modalClosed={closeModalForSize}
                onChangeMatrixDimension={onChangeMatrixDimension}
                onGetRandomPositions={onGetRandomPositions}
                getRandomInt={getRandomInt}
                onCreateConnectivityMatrix={onCreateConnectivityMatrix}
            />
        </Modal>
    )

    const modalChangeAlgorithms = (
        <Modal
            show={showAlgorithms}
            modalClosed={closeModalForAlgorithms}
        >
            <ChangeAlgorithms 
                modalClosed={closeModalForAlgorithms}
                onSelectAlgorithms={onSelectAlgorithms}
                algorithms={algorithms}
            />
        </Modal>
    )
    return(
        <Fragment>
            {spinner}
            <style.StyledMain>
                <StartPanel 
                    m={m}
                    n={n}
                    startX={startX}
                    startY={startY}
                    endX={endX}
                    endY={endY}
                    matrix={matrix}
                    openModalForLocation={openModalForLocation}
                    openModalForSize={openModalForSize}
                    openModalForAlgorithms={openModalForAlgorithms}
                    runAlgorithms={runAlgorithms}
                    clickedRun={clickedRun}
                    finish={finish}
                />
                <LevelPanel 
                    levelsArray={levelsArray}
                    openLevel={openLevel}
                />
                <RunnersPanel 
                    m={m}
                    n={n}
                    startX={startX}
                    startY={startY}
                    endX={endX}
                    endY={endY}
                    matrixBFS={matrixPATH}
                    clickedRun={clickedRun}
                    bfsArray={bfsArray}
                    algorithmName={algorithmName}
                    pathMATRIX={pathMATRIX}
                />
                {modalChangeLoaction}
                {modalChangeSize}
                {modalChangeAlgorithms}
            </style.StyledMain>
        </Fragment>
    )
}

export default MainContainer;