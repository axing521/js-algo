import HashTable from "./HashTable";
import { defaultToString } from "../../util";
import LinkedList from "../linked-list/LinkedList.js";
import { ValuePair } from "./Dictonary";

export default class HashTableSeparateChaining extends HashTable{
    constructor(toStrFn=defaultToString){
        this.toStrFn=toStrFn;
        this.table={};
    }
    put(key,value){
        if(key!=null && value!=null){
            const position=this.hashCode(key);
            if(this.table[position]==null){
                this.table[position]=new LinkedList();
            }
            this.table[position].push(new ValuePair(key,value));
            return true;
        }
        return false;
    }
    get(key){
        const position=this.hashCode(key);
        const linkedlist=this.table[position];
        if(linkedlist!=null && !linkedlist.isEmpty()){
            let current=linkedlist.getHead();
            while(current!=null){
                if(current.item.key===key){
                    return current.item.value;
                }
                current=current.next;
            }
            return undefined;
        }
        return undefined;
    }
    remove(key){
        const position=this.hashCode(key);
        const linkedlist=this.table[position];
        if(linkedlist!=null && !linkedlist.isEmpty()){
            let current=linkedlist.getHead();
            while(current!=null){
                if(current.item.key===key){
                    linkedlist.remove(current.item);
                    if(linkedlist.isEmpty()){
                        delete this.table[position];
                    }
                    return true;
                }
                current=current.next;
            }
        }
        return false;
    }
}