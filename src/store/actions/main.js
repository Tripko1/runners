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

export const changeMatrixDimension_Start = () => {
    return{
        type: actionTypes.CHANGE_MATRIX_DIMENSION_START
    }
}

export const changeMatrixDimension_Success = (rows,columns) => {
    return{
        type: actionTypes.CHANGE_MATRIX_DIMENSION_SUCCESS,
        rows: rows,
        columns: columns
    }
}

export const changeMatrixDimension = (rows,columns) => {
    return dispatch => {
        dispatch(changeMatrixDimension_Start());
        setTimeout(() => {
            dispatch(changeMatrixDimension_Success(rows,columns));
        }, 1000);
    }
}