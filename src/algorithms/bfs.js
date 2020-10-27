let reconstruction = [];

const ENQUEUE = (Q,s) => {
    Q.push(s);
    return Q;
}

const DEQUEUE = (Q) => {
    Q.shift();
    return Q;
}

const END_START_RECONSTRUCTION = (pi, start, end, r) => {
    if(end.i === start.i && end.j === start.j){
        r.push(end);
        reconstruction = r;
        return;
    }
    r.push(end);
    END_START_RECONSTRUCTION(pi, start, pi[end.i][end.j], r);
}

const START_END_RECONSTRUCTION = () => {
    const n = reconstruction.length;
    let pom;
    for(let i=0; i<n/2; i++){
        pom=reconstruction[i];
        reconstruction[i] = reconstruction[n-i-1];
        reconstruction[n-i-1] = pom;
    }
}

export const bfs = (state,mat) => {
    let color = [], Q = [], d = [], pi = [];
    let path = true;
    let matrix;
    if(mat !== null){
        matrix = [...mat];
        for(let i=0; i.length; i++){
            matrix[i] = [...mat[i]];
        }
    }
    else{
        matrix = [...state.matrix];
        for(let i=0; i.length; i++){
            matrix[i] = [...state.matrix[i]];
        }
    }
    for(let i=0; i<state.n; i++){
        color.push([]);
        d.push([]);
        pi.push([]);
        for(let j=0; j<state.m; j++){
            if(matrix[i][j]===3){
                color[i].push("RED");
            }
            else{
                color[i].push("WHITE");
            }
            d[i].push(Infinity);
            pi[i].push(null);
        }
    }
    color[state.startY][state.startX] = "GRAY";
    d[state.startY][state.startX] = 0;
    pi[state.startY][state.startX] = null;
    Q = ENQUEUE(Q, {j: state.startX, i: state.startY });

    while(Q.length > 0){
        let n = state.graph[Q[0].i][Q[0].j].length;
        for(let k=0; k<n; k++){
            const i = state.graph[Q[0].i][Q[0].j][k].i;
            const j = state.graph[Q[0].i][Q[0].j][k].j;
            if(color[i][j]==="WHITE"){
                color[i][j]="GRAY";
                d[i][j] = d[Q[0].i][Q[0].j] + 1;
                pi[i][j] = {i: Q[0].i, j: Q[0].j};
                Q = ENQUEUE(Q, {j: j, i: i});
            }
        }
        color[Q[0].i][Q[0].j] = "BLACK";
        if(Q[0].i === state.endY && Q[0].j === state.endX){
            break;
        }
        Q = DEQUEUE(Q);
        if(Q.length === 0){
            console.log("FINISH");
            path=false;
            break;
        }
    }

    if(path){
        const start = {i: state.startY, j: state.startX};
        const end = {i: state.endY, j: state.endX};
        END_START_RECONSTRUCTION(pi,start,end, []);
        START_END_RECONSTRUCTION();
        return{
            pi: pi,
            d: d,
            color: color,
            reconstruction: reconstruction,
            path: path,
            level: state.level,
            matrix: state.matrix
        }
    }
    return{
        path: path
    }
}