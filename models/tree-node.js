export class Node{
    constructor(key){
        this.key=key;   //节点值
        this.left=null;     //左侧子节点引用
        this.right=null;    //右侧子节点引用
    }
    toString(){
        return `${this.key}`;
    }
}

export const Colors={
    RED:"red",
    BLACK:"black"
}

export class RedBlackNode extends Node{
    constructor(key){
        super(key);
        this.key=key;
        this.color=Colors.RED;
        this.parent=null;
    }
    isRed(){
        return this.color===Colors.RED;
    }
}