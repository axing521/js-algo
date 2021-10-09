import LinkedList from "./LinkedList.js";
import {defaultEquals} from "../../util.js";
import {Node} from "../../models/linked-list-models.js";

const Compare={
    LESS_THAN:-1,
    BIGGER_THAN:1,
};

function defaultCompare(a,b){
    if(a===b){
        return 0;
    }
    return a<b ? Compare.LESS_THAN : Compare.BIGGER_THAN ;
}

export default class SortedLinkedList extends LinkedList{
    constructor(equalsFn=defaultEquals , compareFn=defaultCompare){
        super(equalsFn);
        this.compareFn=compareFn;
    }
    //有序插入
    insert(item,index=0){
        if(this.isEmpty()){
            return super.insert(item,index);
        }
        const pos=this.getIndexNextSortedItem(item);
        return super.insert(item,pos);
    }
    getIndexNextSortedItem(item){
        let current=this.head;
        for(let i=0;i<this.count;i++){
            const comp=this.compareFn(item,current.item);
            if(comp===Compare.LESS_THAN){
                return i;
            }
            current=current.next;
        }
        return i;
    }
}