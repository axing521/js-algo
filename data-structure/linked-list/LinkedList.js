import {defaultEquals} from "../../util.js";
import {Node} from "../../models/linked-list-models.js";//助手类，各个节点

export default class LinkedList{
    constructor(equalsFn=defaultEquals){
        this.count=0;//存储链表中元素数量
        this.head=null;
        this.equalsFn=equalsFn;
    }
    push(item){
        const node=new Node(item);//将待添项装入Node链表项
        let current;
        if(this.head==null){
            this.head=node;
        }else{
            current=this.head;
            while(current.next!=null){
                current=current.next; //不断迭代直到查找到最后一项
            }
            current.next=node;
        }
        this.count++;
    }
    /* removeAt(index){
        //检查越界值
        if(index>=0 && index<this.count){
            let current=this.head;
            if(index===0){
                this.head=current.next;
            }else{
                let previous;
                for(let i=0;i<index;i++){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;//将previous与current的下一项链接起来，跳过current，从而remove
            }
            this.count--;
            return current.item;//返回被remove的项
        }
        return undefined;
    } */
    getItemAt(index){
        if(index>=0 && index<this.count){
            let current=this.head;
            for(let i=0;i<index && current!=null;i++){ //有一说一，这个current!=null是不是有点多余
                current=current.next;
            }
            return current;
        }
        return undefined;
    }
    //用getItemAt(index)重构其他方法
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            if (index === 0) {
            this.head = current.next;
            } else {
                const previous = this.getItemAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.item;
        }
        return undefined;
    }
    insert(item,index){
        if(index>=0 && index<this.count){ //注意，insert，插队的话我觉得就没必要插到最后一个
            const node=new Node(item);//将待添项装入Node链表项
            if(index===0){
                const current=this.head;
                node.next=current;
                this.head=node;
            }else{
                const previous=this.getItemAt(index-1);
                const current=previous.next;
                node.next=current;
                previous.next=node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    indexOf(item){
        let current=this.head;
        for(let i=0;i<this.count && current!=null;i++){
            if(this.equalsFn(item,current.item)){
                return i;
            }
            current=current.next;
        }
        return -1;
    }
    remove(item){
        const index = this.indexOf(item);
        return this.removeAt(index);
    }
    size(){
        return this.count;
    }
    isEmpty(){
        return this.size()===0;
    }
    getHead(){
        return this.head;
    }
    toString(){
        if(this.head==null){
            return "";
        }
        let objString=`${this.head.item}`;
        let current=this.head.next;
        for(let i=1;i<this.size() && current!=null;i++){
            objString=`${objString},${current.item}`;
            current=current.next;
        }
        return objString;
    }
}
