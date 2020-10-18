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
    BFS(start){
        let visited = {}
        let qu = [];
        let res = []
        qu.push(start)
        visited[start] = true;
        while(qu.length > 0){
            let temp = qu.shift();
                res.push(temp)
                for(let i = 0; i < this.adjancyList[temp].length; i++){
                    if(!visited[this.adjancyList[temp][i]]){
                        visited[this.adjancyList[temp][i]] = true
                        qu.push(this.adjancyList[temp][i])
                    }
                }
        }
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

console.log(Gr.BFS(2))