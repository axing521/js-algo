/* 两个栈，倒车入库 */
class MyQueue{
    constructor(){
        this.inStack = [];
        this.outStack = [];
    }

    _in2out(){
        while(this.inStack.length){
            this.outStack.push(this.inStack.pop());
        }
    }
    push(x){
        this.inStack.push(x);
    }
    pop(){
        if(!this.outStack.length){
            this._in2out();
        }
        return this.outStack.pop();
    }
    peek(){
        if(!this.outStack.length){
            this._in2out();
        }
        return this.outStack[this.outStack.length-1];
    }
    empty(){
        return this.inStack.length===0 && this.outStack.length===0;
    }
}
