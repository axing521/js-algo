/***
 * @creater:ACBash
 * @create_time:21-11-2 21:17:3
 * @last_modify:ACBash
 * @modify_time:21-11-3 19:37:19
 * @line_count:142
 **/

/* 最大堆 + 最小堆，600ms */
//JS没有内置堆数据结构，手搓一个
const defaultCmp = (a, b) => a > b; //默认最大堆
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
    }

    insert(val){
        const {container, cmp} = this;
        
        container.push(val);
        let index = container.length - 1;

        while(index){
            let parent = Math.floor((index - 1) / 2);

            if(cmp(container[parent], container[index])) return;

            swap(container, index, parent);

            index = parent;
        }
    }

    top(){
        return this.container[0];
    }

    extract(){
        const {container, cmp} = this;

        if(!container.length) return undefined;

        swap(container, 0, container.length - 1);

        const ans = container.pop();
        const len = container.length;

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

class MedianFinder{
    constructor(){
        this.maxHeap = new Heap();
        this.minHeap = new Heap((x, y) => x < y);
    }

    addNum(num){
        this.maxHeap.insert(num);
        this.minHeap.insert(this.maxHeap.extract());

        if(this.maxHeap.container.length < this.minHeap.container.length){
            this.maxHeap.insert(this.minHeap.extract());
        }
    }

    findMedian(){
        if(this.maxHeap.container.length > this.minHeap.container.length){
            return this.maxHeap.top();
        }else{
            return (this.maxHeap.top() + this.minHeap.top()) / 2;
        }
    }
}

/* 二分法，2600ms */
class MedianFinder{
    constructor(){
        this.container = [];
    }

    addNum(num){
        if(!this.container.length){
            this.container.push(num);
            return;
        }

        let left = 0, right = this.container.length - 1;
        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(this.container[mid] == num){
                this.container.splice(mid, 0, num);
                return;
            }else if(this.container[mid] < num){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        this.container.splice(right + 1, 0, num);
    }

    findMedian(){
        const len = this.container.length;
        if(!len) return undefined;

        const mid = Math.floor((len - 1) / 2);
        if(len % 2){
            return this.container[mid];
        }
        return (this.container[mid] + this.container[mid + 1]) / 2;
    }
}

/* let a = new MedianFinder();

a.addNum(-1);
console.log(a);

a.addNum(-2);
console.log(a);

a.addNum(-3);
console.log(a);

a.addNum(-4);
console.log(a);

a.addNum(-5);
console.log(a); */