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

export const selectAlgorithms_Start = () => {
    return{
        type: actionTypes.SELECT_ALGORITHMS_START
    }
}

export const selectAlgorithms_Success = (algorithms) => {
    return{
        type: actionTypes.SELECT_ALGORITHMS_SUCCESS,
        algorithms: algorithms
    }
}

export const selectAlgorithms = (algorithms) => {
    return dispatch => {
        dispatch(selectAlgorithms_Start());
        setTimeout(() => {
            dispatch(selectAlgorithms_Success(algorithms));
        }, 1000);
    }
}

export const createConnectivityMatrix_Start = () => {
    return{
        type: actionTypes.CREATE_CONNECTIVITY_MATRIX_START
    }
}

export const createConnectivityMatrix_Success = () => {
    return{
        type: actionTypes.CREATE_CONNECTIVITY_MATRIX_SUCCESS
    }
}

export const createConnectivityMatrix = () => {
    return dispatch => {
        dispatch(createConnectivityMatrix_Start());
        setTimeout(() => {
            dispatch(createConnectivityMatrix_Success());
        }, 1000);
    }
}

export const bfs_start = () => {
    return{
        type: actionTypes.BFS_START
    }
}

export const bfs_success = (obj) => {
    return{
        type: actionTypes.BFS_SUCCESS,
        obj: obj
    }
}

export const bfs = (obj) => {
    return dispatch => {
        dispatch(bfs_start());
        dispatch(bfs_success(obj));
    }
}

export const setMatrixBFS_start = () => {
    return{
        type: actionTypes.SET_MATRIX_BFS_START
    }
}

export const setMatrixBFS_success = (mat,alg,matPath) => {
    return{
        type: actionTypes.SET_MATRIX_BFS_SUCCESS,
        mat: mat,
        alg: alg,
        matPath: matPath
    }
}

export const setMatrixBFS = (mat,alg,matPath) => {
    return dispatch => {
        dispatch(setMatrixBFS_start());
        dispatch(setMatrixBFS_success(mat,alg,matPath));
    }
}

export const levelFinish_start = () => {
    return{
        type: actionTypes.LEVEL_FINISH_START
    }
}

export const levelFinish_success = (mat) => {
    return{
        type: actionTypes.LEVEL_FINISH_SUCCESS,
        mat: mat,
    }
}

export const levelFinish = (mat) => {
    return dispatch => {
        dispatch(levelFinish_start());
        dispatch(levelFinish_success(mat));
    }
}

export const finishGame_Start = () => {
    return {
        type: actionTypes.FINISH_GAME_START
    }
}

export const finishGame_Success = () => {
    return {
        type: actionTypes.FINISH_GAME_SUCCESS
    }
}

export const finishGame = () => {
    return dispatch => {
        dispatch(finishGame_Start());
        dispatch(finishGame_Success());
    }
}

export const dijkstra_start = () => {
    return{
        type: actionTypes.DIJKSTRA_START
    }
}

export const dijkstra_success = (obj) => {
    return{
        type: actionTypes.DIJKSTRA_SUCCESS,
        obj: obj
    }
}

export const dijkstra = (obj) => {
    return dispatch => {
        dispatch(dijkstra_start());
        dispatch(dijkstra_success(obj));
    }
}

export const dfs_start = () => {
    return{
        type: actionTypes.DFS_START
    }
}

export const dfs_success = (obj) => {
    return{
        type: actionTypes.DFS_SUCCESS,
        obj: obj
    }
}

export const dfs = (obj) => {
    return dispatch => {
        dispatch(dfs_start());
        dispatch(dfs_success(obj));
    }
}

export const resetMatrixPath_success = () => {
    return{
        type: actionTypes.RESET_MATRIX_PATH_SUCCESS
    }
}

export const resetMatrixPATH = () => {
    return dispatch => {
        dispatch(resetMatrixPath_success());
    }
}

export const finishTestLevel_success = () => {
    return{
        type: actionTypes.FINISH_TEST_LEVEL_SUCCESS
    }
}

export const finishTestLevel = () => {
    return dispatch => {
        dispatch(finishTestLevel_success());
    }
}

export const rememberMainMatrix_success = () => {
    return{
        type: actionTypes.REMEMBER_MAIN_MATRIX_SUCCESS
    }
}

export const rememberMainMatrix = () => {
    return dispatch => {
        dispatch(rememberMainMatrix_success());
    }
}