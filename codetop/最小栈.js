// 设计一个支持push，pop，top操作，并且O(1)时间检索到最小元素的栈:MinStack
// 栈中存一个item对象，包含val值和当前栈内最小值min

class MinStack{
    constructor(){
        this.items = [];
    }

    push(value){
        let len = this.container.length;
        let item = {
            val: value,
            min: len ? Math.min(value, this.items[len - 1].min) : value
        }
        this.items.push(item);
    }

    pop(){
        return this.items.pop().val;
    }

    top(){
        return this.items[this.items.length - 1].val;
    }

    getMin(){
        return this.items[this.items.length - 1].min;
    }
}