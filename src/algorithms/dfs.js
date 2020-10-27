let time,q,w;
let pi=[],f=[],d=[],color=[],reconstruction=[];

const DFS_VISIT = (state,node) => {
    color[node.i][node.j] = "GRAY";
    time=time+1;
    d[node.i][node.j] = time;

    if(node.i === state.endY && node.j === state.endX){
        return 1;
    }

    const n = state.graph[node.i][node.j].length;
    for(let k=0; k<n; k++){
        const q = state.graph[node.i][node.j][k].i;
        const w = state.graph[node.i][node.j][k].j;
        if(color[q][w] === "WHITE"){
            pi[q][w] = {i:node.i, j: node.j}
            DFS_VISIT(state,{i:q, j:w});
        }
    }
    color[node.i][node.j] = "BLACK";
    time++;
    f[node.i][node.j] = time;
    return 0;
}

const END_START_RECONSTRUCTION = (start, end, r) => {
    if(end === null){
        return;
    }
    if(end.i === start.i && end.j === start.j){
        r.push(end);
        reconstruction = r;
        return;
    }
    r.push(end);
    END_START_RECONSTRUCTION( start, pi[end.i][end.j], r);
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

export const dfs = (state) => {
    pi=[];
    f=[];
    d=[];
    color=[];
    reconstruction=[];

    for(let i=0; i<state.n; i++){
        color.push([]);
        pi.push([]);
        d.push([]);
        f.push([]);
        for(let j=0; j<state.m; j++){
            if(state.matrix[i][j]===3){
                color[i].push("RED");
            }
            else{
                color[i].push("WHITE");
            }
            pi[i].push(null);
            d[i].push(null);
            f[i].push(null);
        }
    }
    time=0;
    let i = state.startY;
    let j = state.startX;
    color[i][j] = "GRAY";
    time++;
    d[i][j]=time;

    let n = state.graph[i][j].length;
    for(let k=0; k<n; k++){
        q = state.graph[i][j][k].i;
        w = state.graph[i][j][k].j;
        if(color[q][w] === "WHITE"){
            pi[q][w] = {i:i, j:j};
            DFS_VISIT(state,{i:q, j:w});
        }
    }
    const start = {i: state.startY, j: state.startX};
    const end = {i: state.endY, j: state.endX};
    END_START_RECONSTRUCTION(start,end, []);
    START_END_RECONSTRUCTION();
    return{
        reconstruction: reconstruction,
        color: color,
        d: d,
        f: f,
        pi: pi,
        level: state.level
    }
}