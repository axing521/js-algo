/***
 * @creater:ACBash
 * @create_time:21-10-18 15:3:2
 * @last_modify:ACBash
 * @modify_time:22-10-23 18:27:3
 * @line_count:54
 **/

/* 单调栈，600ms */
//按题意模拟
class StockSpanner{
    constructor(){
        this.container = [];
    }

    next(val){
        this.container.push(val);
        
        let ans = 1, index = this.container.length - 2;

        while(index >= 0 && this.container[index] <= val){
            ans++;
            index--;
        }

        return ans;
    }
}

/* 单调栈，空间换时间，增加一个count记录当前跨度，300ms */
class StockSpanner{
    constructor(){
        this.container = [];
        this.count = 0;
    }

    next(val){
        while(this.container.length && this.container[this.container.length - 1].val <= val){
            this.container.pop();
        }

        const flag = this.container.length ? this.container[this.container.length - 1].index : 0;

        this.count++;

        this.container.push({
            "index": this.count,
            "val": val
        })

        return this.count - flag;
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