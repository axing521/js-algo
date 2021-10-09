import Dictionary from "../dictionary-and-hashTable/Dictonary.js";

export const Colors={
    WHITE:0,
    GREY:1,
    BLACK:2
}

export const initializeColor= vertices => {
    const color={};
    for(let i=0;i<vertices.length;i++){
        color[vertices[i]]=Colors.WHITE;
    }
    return color;
}

export default class Graph{
    constructor(isDirected=false){  //接收一个参数表示图是否有向，默认无向
        this.isDirected=isDirected;
        this.vertices=[];   //顶点名字目录
        this.adjList=new Dictionary();  //字典存储*邻接表*,key:verticesName,value:nextVerticesArray
    }
    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v,[]); //这个地方很细节,value是列表，为了后面的push
        }
    }
    addEdge(v,w){
        if(!this.adjList.get(v)){
            this.addVertex(v);
        }
        if(!this.adjList.get(w)){
            this.addVertex(w);
        }
        this.adjList.get(v).value.push(w);
        if(!this.isDirected){
            this.adjList.get(w).value.push(v);
        }
    }
    getVertices(){
        return this.vertices;
    }
    getAdjList(){
        return this.adjList;
    }
    toString(){
        let s="";
        for(let i=0;i<this.vertices.length;i++){
            s+=`${this.vertices[i]} -> `;
            const neighbors=this.adjList.get(this.vertices[i]).value;
            for(let j=0;j<neighbors.length;j++){
                s+=`${neighbors[j]} `;
            }
            s+="\n";
        }
        return s;
    }
}

/* const graph=new Graph();
const myVertices=["A","B","C","D","E","F","G","H","I"];

for(let i=0;i<myVertices.length;i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("C","D");
graph.addEdge("C","G");
graph.addEdge("D","G");
graph.addEdge("D","H");
graph.addEdge("B","E");
graph.addEdge("B","F");
graph.addEdge("E","I");

console.log(graph.toString()); */