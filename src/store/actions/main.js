import * as actionTypes from "./actionTypes";

export const getRandomPositions_Start = () => {
    return{
        type: actionTypes.GET_RANDOM_POSITIONS_START
    }
}

export const getRandomPositions_Success = (Xstart,Ystart,Xend,Yend) => {
    return{
        type: actionTypes.GET_RANDOM_POSITIONS_SUCCESS,
        Xstart: Xstart,
        Ystart: Ystart,
        Xend: Xend,
        Yend: Yend
    }
}

export const getRandomPositions = (Xstart,Ystart,Xend,Yend) => {
    return dispatch => {
        dispatch(getRandomPositions_Start());

        setTimeout(() => {
            dispatch(getRandomPositions_Success(Xstart,Ystart,Xend,Yend));
        }, 1000);
    }
}