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
}

// object
let Gr = new Graph();

// add vertex
Gr.addVertex("A")
Gr.addVertex("B")
Gr.addVertex("C")
Gr.addVertex("D")
Gr.addVertex("E")

// Add Edge
Gr.addEdge("A", "D")
Gr.addEdge("A", "B")
Gr.addEdge("B", "C")
Gr.addEdge("B", "D")
Gr.addEdge("C", "D")
Gr.addEdge("C", "E")
Gr.addEdge("E", "D")



console.log(Gr.adjancyList);

