/***
 * @creater:ACBash
 * @create_time:21-12-15 18:3:10
 * @last_modify:ACBash
 * @modify_time:21-12-15 18:41:11
 * @line_count:100
 **/

/* 最大堆实现动态有序读写操作(能插队) */
const defaultCmp = (a, b) => a > b;
const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

class Heap{
    constructor(cmp = defaultCmp){
        this.container = [];
        this.cmp = cmp;
    }

    size(){
        return this.container.length;
    }

    insert(val){
        let {container, cmp} = this;

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
        if(!this.container.length) return null;
        return this.container[0];
    }

    extract(){
        if(!this.container.length) return null;
        if(this.container.length == 1) return this.container.pop();

        let {container, cmp} = this;

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

const lastStoneWeight = (stones) => {
    let maxHeap = new Heap();

    for(const val of stones){
        maxHeap.insert(val);
    }

    while(maxHeap.size() > 1){
        const y = maxHeap.extract();
        const x = maxHeap.extract();
        const z = y - x;

        if(z) maxHeap.insert(z);
    }
    
    return maxHeap.size() ? maxHeap.top() : 0;
};

/* sort-API */
const lastStoneWeight = (stones) => {
    let sorted = stones.sort((a, b) => a - b);

    while(sorted.length > 1){
        const y = sorted.pop();
        const x = sorted.pop();
        const z = y - x;

        if(z){
            sorted.push(z);
            sorted.sort((a, b) => a - b);
        }
    }

    return sorted.length ? sorted[0] : 0;
};