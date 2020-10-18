// Graph
class Graph{
    constructor(){
        this.adjancyList = {}
    }
    addVertex(v){
        if(!this.adjancyList[v]){
            this.adjancyList[v] = []
            return this;
        } else {
            return this;
        }
    }
    addEdge(v1, v2){
        if(!this.adjancyList[v1]){
            this.adjancyList[v1] = [];

        } if(!this.adjancyList[v2]){
            this.adjancyList[v2] = [];
        } 
        this.adjancyList[v1].push(v2)
        this.adjancyList[v2].push(v1)
        return this;
    }
    BFS(start, dest){
        // for count vertices
        function getMapSize(x) {
            var len = 0;
            for (var count in x) {
                    len++;
            }
        
            return len;
        }
        let visited = {}
        let qu = [];
        let res = []
        qu.push(start)
        visited[start] = true;
        // to shortest path
        let dist = []
        let parent = []
        let TotalVertices = getMapSize(this.adjancyList)
        for(let i = 0; i < TotalVertices; i++){
            dist[i] = -1
            parent[i] = -1
        }
        while(qu.length > 0){
            let temp = qu.shift();
                res.push(temp)
                for(let i = 0; i < this.adjancyList[temp].length; i++){
                    if(!visited[this.adjancyList[temp][i]]){
                        visited[this.adjancyList[temp][i]] = true
                        qu.push(this.adjancyList[temp][i])

                        // 
                        dist[this.adjancyList[temp][i]] = dist[temp] + 1;
                        parent[this.adjancyList[temp][i]] = temp;
                    }
                }
        }
        
        let temp = dest;
        while(temp != -1){
            console.log(temp);
            temp = parent[temp]
        }
        return res;
    }
}

// object
let Gr = new Graph();

let board = [];
for(let i = 0; i < 50; i++){
    board[i] = 0;
}

board[2] = 13
board[5] = 2
board[9] = 18
board[18] = 11
board[17] = -13
board[20] = -14
board[24] = -8
board[25] = -10
board[32] = -2
board[34] = -22

// insert edge
for(let u = 0; u < 36; u++){
    for(let dice = 1; dice <= 6; dice++){
        let v = u + dice + board[u+dice]
        Gr.addEdge(u,v)
    }
}
// Gr.addEdge(1,2)
console.log(Gr.adjancyList);

console.log(Gr.BFS(0, 36))

