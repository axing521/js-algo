import DoublyLinkedList from "./DoublyLinkedList.js";

export default class StackLinkedList{
    constructor(){
        this.items=new DoublyLinkedList();
    }
    push(item){
        this.items.push(item);
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.removeAt(this.size()-1);
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.getItemAt(this.size()-1).item;
    }
    isEmpty(){
        return this.items.isEmpty();
    }
    size(){
        return this.items.size();
    }
    clear(){
        this.items.clear();
    }
    toString(){
        return this.items.toString();
    }
}


