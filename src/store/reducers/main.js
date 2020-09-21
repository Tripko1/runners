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
    barrier: []
}

const getRandomStart = (state,action) => {
    return updateObject(state, { loading: true, })
}

const setMatrix = (state,action) => {
    let pomMatrix = [...state.matrix]
    pomMatrix[state.startX][state.startY] = 0;
    pomMatrix[state.endX][state.endY] = 0;

    pomMatrix[action.Xstart][action.Ystart] = 1;
    pomMatrix[action.Xend][action.Yend] = 2;

    const len = state.barrier.length;
    for(let i=0; i<len; i++){
        pomMatrix[state.barrier[i].x][state.barrier[i].y] = 0;
    }
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_RANDOM_POSITIONS_START:
            return getRandomStart(state,action);
        case actionTypes.GET_RANDOM_POSITIONS_SUCCESS:
            return getRandomSuccess(state,action);
        default: return state;
    }
}

export default reducer;