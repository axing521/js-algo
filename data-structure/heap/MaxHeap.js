import { defaultCompare, reverseCompare } from "../../util.js";
import MinHeap from "./MinHeap.js";


export default class MaxHeap extends MinHeap{
    constructor(compareFn=defaultCompare){
        super(compareFn);
        this.compareFn=reverseCompare(compareFn);
    }
}

/* let heap=new MaxHeap();
for(let i=1;i<10;i++){
    heap.insert(i);
}

console.log(heap.extract()); */