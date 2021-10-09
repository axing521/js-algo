import {DoublyNode} from "../../models/linked-list-models.js";
import {defaultEquals} from "../../util.js";
import LinkedList from "./LinkedList.js";

export default class DoublyLinkedList extends LinkedList{
    constructor(equalsFn=defaultEquals){
        super(equalsFn);
        this.tail=undefined;
    }
    insert(item,index){
        if(index>=0 && index<=this.count){
            const node=new DoublyNode(item);//装载node
            let current=this.head;
            if(index===0){
                if(this.head==null){
                    this.head=node;
                    this.tail=node;
                }else{
                    node.next=this.head;
                    current.prev=node;
                    this.head=node;
                }
            }else if(index===this.count){
                current=this.tail;
                current.next=node;
                node.prev=current;
                this.tail=node;
            }else{
                const previous=this.getItemAt(index-1);
                current=previous.next;
                node.next=current;
                node.prev=previous;
                previous.next=node;
                current.prev=node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    removeAt(index){
        if(index>=0 && index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next;
                if(this.count===1){
                    this.tail=undefined;
                }else{
                    this.head.prev=undefined;//细品
                }
            }else if(index===this.count-1){
                current=this.tail;
                this.tail=current.prev;
                this.tail.next=undefined;
            }else{
                current=this.getItemAt(index);
                const previous=current.prev;
                previous.next=current.next;
                current.next.prev=previous;
            }
            this.count--;
            return current.item;
        }
        return undefined;
    }
}