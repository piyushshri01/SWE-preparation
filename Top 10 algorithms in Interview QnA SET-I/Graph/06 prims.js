function prims(){
    let I = Infinity;
    let cost = [
                [I , I, I, I, I , I, I, I],
                [I , I,25, I, I , I,05, I],
                [I ,25, I,12, I , I, I,10],
                [I , I,12, I,08 , I, I, I],
                [I , I, I,08, I ,16, I,14],
                [I , I, I, I,16 , I,20,18],
                [I ,05, I, I, I ,20, I, I],
                [I , I,10, I,14 ,18, I, I],
    ];

    let near = [];
    let t = [[], []];

    let i,j,k,u,v,n=7,min = Infinity;
    for(i = 1; i <=n; i++){
        for(j = i; j <= n; j++){
            if(cost[i][j] < min){
                min = cost[i][j];
                u = i; v = j;
            }
        }
    }

    t[0][0] = u;
    t[1][0] = v;
    near[u] = near[v] = 0;

    for(i = 1; i <=n; i++){
        if(near[i] !== 0){
            if(cost[i][u] < cost[i][v]){
                near[i] = u;
            } else {
                near[i] = v;
            }
        }
    }

// prims logic
    for(i = 1; i < n-1; i++){
        min = I;
        for(j = 1; j <= n; j++){
            if(near[j] != 0 && cost[j][near[j]] < min) {
                min = cost[j][near[j]]
                k = j;
            }
        }
        t[0][i] = k;
        t[1][i] = near[k];
        near[k] = 0;
        for(j = 1; j <= n; j++){
            if(near[j] != 0 && cost[j][k] < cost[j][near[j]]){
                near[j] = k;
            }
        }
    }
    console.log(t);
}

prims();