/* 测试用例 */
/* let customStack0 = new CustomStack(3);
console.log(customStack0);

customStack0.push(1);
console.log(customStack0);

customStack0.push(2);
console.log(customStack0);

customStack0.pop();
console.log(customStack0);

customStack0.push(2);
console.log(customStack0);

customStack0.push(3);
console.log(customStack0);

customStack0.push(4);
console.log(customStack0);

customStack0.increment(5,100);
console.log(customStack0);

customStack0.increment(2,100);
console.log(customStack0);

customStack0.pop();
customStack0.pop();
customStack0.pop();
customStack0.pop(); */

class CustomStack{
    constructor(maxSize){
        this.items=[];
        this.length=maxSize;
    }

    push(x){
        if(this.items.length!==this.length){
            this.items.push(x);
        }
    }
    pop(){
        return this.items.length ? this.items.pop() : -1;   
    }
    increment(k,val){
        this.items = this.items.map((item,index) => index<k ? item+val : item);
    }
}