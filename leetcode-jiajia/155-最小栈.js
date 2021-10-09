/* 测试用例 */
/* let stack0 = new MinStack();
stack0.push(-2);stack0.push(0);
console.log(stack0);
stack0.push(5);
console.log(stack0);
stack0.push(3);
console.log(stack0);
stack0.push(4);
console.log(stack0);
console.log(stack0);
console.log(stack0.getMin());
stack0.getMin();
console.log(stack0);
stack0.pop();
console.log(stack0);
stack0.pop();
console.log(stack0);
stack0.top();
stack0.getMin();
console.log(stack0); */

/* 1.双栈 */
class MinStack{
    constructor(){
        this.items = [];
        this.minStack = [Infinity];
    }

    push(x){
        this.items.push(x);
        this.minStack.push( Math.min( this.minStack[this.minStack.length-1], x ) );
    }
    pop(){
        this.minStack.pop();
        return this.items.pop();
    }
    top(){
        return this.items[this.items.length-1];
    }
    getMin(){
        return this.minStack[this.minStack.length-1];
    }
}

/* 2.单栈 */
class MinStack{
    constructor(){
        this.items = [];
    }

    push(x){
        let len = this.items.length;
        let item = {
            val: x,
            min: len ? Math.min(x, this.items[len-1].min) : x
        }
        this.items.push(item);
    }
    pop(){
        return this.items.pop().val;
    }
    top(){
        return this.items[this.items.length-1].val;
    }
    getMin(){
        return this.items[this.items.length-1].min;
    }
}

/* 3.差值法 */
class MinStack{
    constructor(){
        this.items = [];
        this.min = Infinity;
    }

    push(x){
        let minCopy = this.min;
        if(x < this.min){
            this.min = x;
        }
        this.items.push( x-minCopy );
    }
    pop(){
        let minCopy = this.min;
        let itemCopy = this.items.pop();
        if(itemCopy < 0){
            this.min = minCopy - itemCopy;
            return minCopy;
        }
        return itemCopy+minCopy;
    }
    top(){
        let minCopy = this.min;
        let itemCopy = this.items[this.items.length-1];
        if(itemCopy < 0) return minCopy;
        else return itemCopy+minCopy;
    }
    getMin(){
        return this.min;
    }
}