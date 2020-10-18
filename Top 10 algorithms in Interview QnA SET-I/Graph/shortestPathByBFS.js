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

        }else if(!this.adjancyList[v2]){
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
        
        for(let i = 0; i < dist.length; i++){
            console.log(`${i} node having dist `+dist[i]);
        }
        // shortest path
        let temp = dest;
        while(temp != -1){
            console.log(temp);
            temp = parent[temp]
        }
        // bfs traversal
        return res;
    }
}

// object
let Gr = new Graph();

// add vertex
Gr.addVertex(0)
Gr.addVertex(1)
Gr.addVertex(2)
Gr.addVertex(3)

// Add Edge
Gr.addEdge(0, 1)
Gr.addEdge(0, 2)
Gr.addEdge(1, 2)
Gr.addEdge(2, 3)

console.log(Gr.adjancyList);

console.log(Gr.BFS(2, 0))


