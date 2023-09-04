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

/***
 * @creater:ACBash
 * @create_time:21-10-13 19:46:41
 * @last_modify:ACBash
 * @modify_time:21-10-13 20:11:55
 * @line_count:57
 **/

 class CustomStack{
    constructor(maxSize){
        this.items = [];
        this.maxSize = maxSize;
    }

    push(x){
        if(this.items.length < this.maxSize){
            this.items.push(x);
        }
    }
    pop(){
        if(this.items.length){
            return this.items.pop();
        }
        return -1;
    }
    increment(k, val){
        const most = Math.min(k,this.items.length)
        for(let i=0; i<most; i++){
            this.items[i] += val;
        }
    }
}