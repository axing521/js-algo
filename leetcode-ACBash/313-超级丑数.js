/***
 * @creater:ACBash
 * @create_time:21-12-15 18:41:9
 * @last_modify:ACBash
 * @modify_time:21-12-16 13:53:39
 * @line_count:127
 **/

/* 哈哈，暴力sort会超时 */
const nthSuperUglyNumber = (n, primes) => {
    let ans = 1, queue = [ans];

    while(n--){
        ans = queue.shift();

        for(let i = 0; i < primes.length; i++){
            queue.push(ans * primes[i]);
        }

        queue = [...new Set(queue)];
        queue.sort((a, b) => a - b);
    }

    return ans;
};

/* 堆,尬住了，这个超空间了 */
const defaultCmp = (a, b) => a > b;
const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
    }

    size(){
        return this.container.length;
    }

    insert(val){
        const {container, cmp} = this;

        container.push(val);

        let index = container.length - 1;

        while(index){
            let parent = (index - 1) >> 1;

            if(cmp(container[parent], container[index])) break;

            swap(container, index, parent);

            index = parent;
        }
    }

    top(){
        if(!this.size()) return null;
        return this.container[0];
    }

    extract(){
        if(!this.size()) return null;
        if(this.size() == 1) return this.container.pop();
        
        const {container, cmp} = this;

        swap(container, 0, container.length - 1);

        const ans = container.pop(), len = container.length;
        let index = 0, betterChild = index * 2 + 1;

        while(betterChild < len){
            let right = index * 2 + 2;

            if(right < len && cmp(container[right], container[betterChild])) betterChild = right;

            if(cmp(container[index], container[betterChild])) break;

            swap(container, index, betterChild);

            index = betterChild;
            betterChild = index * 2 + 1;
        }

        return ans;
    }
}

const nthSuperUglyNumber = (n, primes) => {
    let ans = 1, minHeap = new Heap((a, b) => a < b);
    let set = new Set();

    minHeap.insert(ans);
    set.add(ans);

    while(n--){
        ans = minHeap.extract();

        for(let i = 0; i < primes.length; i++){
            if(!set.has(ans * primes[i])){
                set.add(ans * primes[i])
                minHeap.insert(ans * primes[i]);
            }
        }
    }

    return ans;
};

/* DP */    /* 以primes = [2, 7, 13, 19]为例 */
const nthSuperUglyNumber = (n, primes) => {
    const len = primes.length;
    let uglyNumberOrder = new Array(len).fill(1);   //[1, 1, 1, 1]
    let orderUglyNumber = new Array(n + 1).fill(0);
    orderUglyNumber[1] = 1;                         //[0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                                                    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12   <=  orderUglyNumber的下标
    for(let i = 2; i <= n; i++){
        let min = Infinity;

        for(let j = 0; j < len; j++){
            min = Math.min(min, orderUglyNumber[uglyNumberOrder[j]] * primes[j]);
        }

        for(let k = 0; k < len; k++){
            if(min == orderUglyNumber[uglyNumberOrder[k]] * primes[k]) uglyNumberOrder[k]++;    //[2, 1, 1, 1]
        }

        orderUglyNumber[i] = min;                                                               //[0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    return orderUglyNumber[n];
};