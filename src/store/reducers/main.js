import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    m: 10,
    n: 10,
    level: 1,
    startX: 4,
    startY: 0,
    endX: 4,
    endY: 9,
    matrix: [[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0]],
    graph:[],
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
    bfsArray: []
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
        barrier: []
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
        bfsArray: []
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
        level: action.obj.level
    });
    return updateObject(state, { 
        loading: false,
        bfsArray: state.bfsArray.concat(newArray)
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
            
        default: return state;
    }
}

export default reducer;