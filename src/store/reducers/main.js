import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    m: 10,
    n: 10,
    level: 1,
    levelsArray: [],
    startX: 4,
    startY: 0,
    endX: 4,
    endY: 9,
    matrix: [[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0]],
    graph:[],
    matrixPATH: [[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0]],
    loading: false,
    barrier: [],
    algorithms: [{
        id: 0,
        name: "BFS",
        checked: true
    },{
        id: 1,
        name: "DFS",
        checked: true
    },{
        id: 2,
        name: "Dijkstra",
        checked: true
    },{
        id: 3,
        name: "Floyd Warshall",
        checked: false
    },{
        id: 4,
        name: "Algoritam 5",
        checked: false
    }],
    bfsArray: [],
    dfsArray: [],
    dijkstraArray: [],
    clickedRun: false,
    finish: false,
    algorithmName: "",
    pathMATRIX: [],
}

const getRandomStart = (state,action) => {
    return updateObject(state, { loading: true })
}

const setMatrix = (state,action) => {
    let pomMatrix = [];
    for(let i=0; i<state.n; i++){
        pomMatrix.push([]);
        for(let j=0; j<state.m; j++){
            pomMatrix[i].push(0);
        }
    }

    pomMatrix[action.Ystart][action.Xstart] = 1;
    pomMatrix[action.Yend][action.Xend] = 2;
    return pomMatrix;
}

const getRandomSuccess = (state,action) => {
    return updateObject(state, { 
        loading: false,
        startX: action.Xstart,
        startY: action.Ystart,
        endX: action.Xend,
        endY: action.Yend,
        matrix: setMatrix(state,action),
        barrier: [],
        bfsArray: [],
        dfsArray: [],
        clickedRun: false,
        matrixPATH: setMatrix(state,action),
        algorithmName: "",
        finish: false,
        level: 1,
        levelsArray: [],
        pathMATRIX: []
    })
}

const matDimensionStart = (state,action) => {
    return updateObject(state, { loading: true })
}

const matDimensionSuccess = (state,action) => {
    return updateObject(state, {
        loading: false,
        n: action.rows,
        m: action.columns,
        barrier: [],
        bfsArray: [],
        dfsArray: [],
        dijkstraArray: [],
        clickedRun: false,
        matrixPATH: state.matrix,
        algorithmName: "",
        finish: false,
        level: 1,
        levelsArray: [],
        pathMATRIX: []
    })
}

const selectAlgStart = (state,action) => {
    return updateObject(state, { loading: true })
}

const selectAlgSuccess = (state,action) => {
    return updateObject(state, {
        loading: false,
        algorithms: action.algorithms
    })
}

const createConnectionsStart = (state,action) => {
    return updateObject(state, { loading: true })
}

const setConnections = (state,action) => {
    let pomGraph = [];
    let k=0,p=0;
    for(let i=0; i<state.n; i++){
        pomGraph.push([]);
        for(let j=0; j<state.m; j++){
            pomGraph[k].push([]);
            if(j>=1){
                pomGraph[k][p].push({i: i,j: j-1})
            }
            if(j+1<state.m){
                pomGraph[k][p].push({i: i,j: j+1})
            }
            if(i>=1){
                pomGraph[k][p].push({i: i-1,j: j})
            }
            if(i+1<state.n){
                pomGraph[k][p].push({i: i+1,j: j})
            }
            p++;
        }
        k++;
        p=0;
    }
    return pomGraph;
}

const createConnectionsSuccess = (state,action) => {
    return updateObject(state, { 
        loading: false,
        graph: setConnections(state,action)
    })
}

const bfsStart = (state,action) => {
    return updateObject(state, { loading: true })
}

const bfsSuccess = (state,action) => {
    const newArray = updateObject(action.bfsArray,{
        pi: action.obj.pi,
        d: action.obj.d,
        color: action.obj.color,
        reconstruction: action.obj.reconstruction,
        path: action.obj.path,
        level: action.obj.level,
        matrix: action.obj.matrix
    });
    return updateObject(state, { 
        ...state,
        loading: false,
        bfsArray: state.bfsArray.concat(newArray),
        clickedRun: true
    })
}

const setMatrixBFSStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const setMatrixBFSSuccess = (state, action) => {
    let newArr = [...action.mat];
    for(let i=0; i<newArr.length; i++){
        newArr[i] = [...action.mat[i]];
    }
    let pathMATRIX = [...action.matPath];
    for(let i=0; i<state.n; i++){
        pathMATRIX[i] = [...action.matPath[i]];
    }
    return updateObject(state, {
        loading: false,
        matrixPATH: newArr,
        algorithmName: action.alg,
        pathMATRIX: pathMATRIX,
        clickedRun: true
     });
}

const lvlFinishStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const lvlFinishSuccess = (state, action) => {
    let newMatrix = [...action.mat];
    for(let i=0; i<action.mat.length; i++){
        newMatrix[i] = [...action.mat[i]];
    }
    return updateObject(state, {
        loading: false,
        matrix: newMatrix,
        matrixPATH: newMatrix,
        algorithmName: "",
        clickedRun: false,
        level: state.level + 1,
        levelsArray: state.levelsArray.concat(state.level),
        pathMATRIX: []
     });
}

const finishStart = (state, action) => {
    return updateObject(state, { loading: true })
}

const finishSuccess = (state, action) => {
    return updateObject(state, { 
        loading: false,
        finish: true,
     })
}

const dijkstraStart = (state,action) => {
    return updateObject(state,{ loading: true })
}

const dijkstraSuccess = (state,action) => {
    const newArray = updateObject(action.obj,{
        pi: action.obj.pi,
        d: action.obj.d,
        color: action.obj.color,
        reconstruction: action.obj.reconstruction,
        level: action.obj.level
    });
    return updateObject(state,{ 
        loading: false,
        dijkstraArray: state.dijkstraArray.concat(newArray),
        clickedRun: true
    })
}

const dfsStart = (state,action) => {
    return updateObject(state,{ loading: true })
}

const dfsSuccess = (state,action) => {
    const newArray = updateObject(action.obj,{
        pi: action.obj.pi,
        d: action.obj.d,
        color: action.obj.color,
        reconstruction: action.obj.reconstruction,
        level: action.obj.level
    });
    return updateObject(state,{ 
        loading: false,
        dfsArray: state.dfsArray.concat(newArray),
        clickedRun: true
    })
}

const resetMatrixPath = (state, action) => {
    let matrix = [...state.matrix];
    const n = matrix.length;
    for(let i=0; i<n; i++){
        matrix[i] = [...state.matrix[i]];
    }
    return updateObject(state,{
        matrixPATH: matrix
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_POSITIONS_START:
            return getRandomStart(state,action);
        case actionTypes.GET_RANDOM_POSITIONS_SUCCESS:
            return getRandomSuccess(state,action);
        case actionTypes.CHANGE_MATRIX_DIMENSION_START:
            return matDimensionStart(state,action);
        case actionTypes.CHANGE_MATRIX_DIMENSION_SUCCESS:
            return matDimensionSuccess(state,action);
        case actionTypes.SELECT_ALGORITHMS_START:
            return selectAlgStart(state,action);
        case actionTypes.SELECT_ALGORITHMS_SUCCESS:
            return selectAlgSuccess(state,action);
        case actionTypes.CREATE_CONNECTIVITY_MATRIX_START:
            return createConnectionsStart(state,action);
        case actionTypes.CREATE_CONNECTIVITY_MATRIX_SUCCESS:
            return createConnectionsSuccess(state,action);
        case actionTypes.BFS_START:
            return bfsStart(state,action);
        case actionTypes.BFS_SUCCESS:
            return bfsSuccess(state,action);
        case actionTypes.SET_MATRIX_BFS_START:
            return setMatrixBFSStart(state,action);
        case actionTypes.SET_MATRIX_BFS_SUCCESS:
            return setMatrixBFSSuccess(state,action); 
        case actionTypes.LEVEL_FINISH_START:
            return lvlFinishStart(state, action);
        case actionTypes.LEVEL_FINISH_SUCCESS:
            return lvlFinishSuccess(state, action);
        case actionTypes.FINISH_GAME_START:
            return finishStart(state,action);
        case actionTypes.FINISH_GAME_SUCCESS:
            return finishSuccess(state,action);
        case actionTypes.DIJKSTRA_START:
            return dijkstraStart(state,action);
        case actionTypes.DIJKSTRA_SUCCESS:
            return dijkstraSuccess(state,action);
        case actionTypes.DFS_START:
            return dfsStart(state,action);
        case actionTypes.DFS_SUCCESS:
            return dfsSuccess(state,action);
        case actionTypes.RESET_MATRIX_PATH_SUCCESS:
            return resetMatrixPath(state,action);    
        default: return state;
    }
}

export default reducer;