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
    [0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,2,0,0,0,0,0]]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_INITIAL_DATA:
            return state;
        default: return state;
    }
}

export default reducer;