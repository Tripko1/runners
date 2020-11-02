let Q = [], d = [], pi = [], color = [];
let reconstruction = [];

const END_START_RECONSTRUCTION = (start, end, r) => {
    if(end.i === start.i && end.j === start.j){
        r.push(end);
        reconstruction = r;
        return;
    }
    r.push(end);
    END_START_RECONSTRUCTION(start, pi[end.i][end.j], r);
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

const ENQUEUE = (s) => {
    Q.push(s);
}

const DEQUEUE = () => {
    color[Q[0].i][Q[0].j] = "BLACK";
    Q.shift();
}

export const dijkstra = (state) => {
    Q = [];
    d = [];
    pi = [];
    color=[];

    for(let i=0; i<state.n; i++){
        color.push([]);
        d.push([]);
        pi.push([]);
        for(let j=0; j<state.m; j++){
            if(state.matrix[i][j]===3){
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
    ENQUEUE({i: state.startY, j: state.startX});

    while(Q.length > 0){
        let n = state.graph[Q[0].i][Q[0].j].length;
        for(let k=0; k<n; k++){
            const i = state.graph[Q[0].i][Q[0].j][k].i;
            const j = state.graph[Q[0].i][Q[0].j][k].j;
            if(color[i][j]==="WHITE"){
                color[i][j]="GRAY";
                d[i][j]=d[Q[0].i][Q[0].j] + 1;
                pi[i][j] = {i: Q[0].i, j: Q[0].j}
                ENQUEUE({j: j, i: i});
            }
        }
        DEQUEUE(Q[0]);
        let m=state.graph[state.endY][state.endX].length;
        let ind=0;
        for(let k=0; k<m; k++){
            const i = state.graph[state.endY][state.endX][k].i;
            const j = state.graph[state.endY][state.endX][k].j;
            if(color[i][j] === "BLACK"){
                ind++;
            }
        }
        if(m === ind){
            break;
        }
    }
    const start = {i: state.startY, j: state.startX};
    const end = {i: state.endY, j: state.endX};
    END_START_RECONSTRUCTION(start,end, []);
    START_END_RECONSTRUCTION();
    return{
        pi: pi,
        d: d,
        color: color,
        reconstruction: reconstruction,
        level: state.level,
        matrix: state.matrix
    }
}