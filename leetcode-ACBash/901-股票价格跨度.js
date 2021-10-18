/***
 * @creater:ACBash
 * @create_time:21-10-18 15:3:2
 * @last_modify:ACBash
 * @modify_time:21-10-18 16:7:6
 * @line_count:47
 **/

/* 单调栈，600ms */
class StockSpanner{
    constructor(){
        this.prices = [];
    }

    next(price){
        let pointer = this.prices.length;
        while(pointer && this.prices[pointer-1] <= price){
            pointer--;
        }
        this.prices.push(price);

        return this.prices.length - pointer;
    }
}

/* 单调栈，空间换时间，增加一个count记录当前跨度，300ms */
class StockSpanner{
    constructor(){
        this.stack = [];
        this.count = 0;
    }

    next(price){
        while(this.stack.length && this.stack[this.stack.length-1].value <= price){
            this.stack.pop();
        }    
        let tmp = this.stack.length ? this.stack[this.stack.length-1].index : 0;
        this.count++;
        this.stack.push({
            "index": this.count,
            "value": price
        })

        return this.count - tmp;
    }
}

let a = new StockSpanner();
console.log(a.next(100));
console.log(a.next(80));
console.log(a.next(60));
console.log(a.next(70));
console.log(a.next(60));
console.log(a.next(75));
console.log(a.next(85));