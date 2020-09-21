import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    m: 10,
    n: 10,
    startX: 0,
    startY: 4,
    endX: 9,
    endY: 4,
    matrix: [[0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],
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
    }]
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
        m: action.columns
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
        default: return state;
    }
}

export default reducer;