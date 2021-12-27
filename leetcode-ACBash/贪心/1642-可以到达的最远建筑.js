/***
 * @creater:ACBash
 * @create_time:21-12-22 20:44:49
 * @last_modify:ACBash
 * @modify_time:21-12-27 10:36:43
 * @line_count:84
 **/

/* ladders就像是免单券，当然用在最大差值最好 */
const defaultCmp = (a, b) => a > b;
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
            let parent = (index - 1) >> 1;

            if(cmp(container[parent], container[index])) break;

            swap(container, index, parent);

            index = parent;
        }
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

    top(){
        if(!this.size()) return null;
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}

const furthestBuilding = (heights, bricks, ladders) => {
    const len = heights.length;
    let minHeap = new Heap((a, b) => a < b);    //维护最大的ladders个值，固定堆
    let sumH = 0;

    for(let i = 1; i < len; i++){
        const deltaH = heights[i] - heights[i - 1];

        if(deltaH > 0){
            minHeap.insert(deltaH);

            if(minHeap.size() > ladders) sumH += minHeap.extract();
            
            if(sumH > bricks) return i - 1;
        }
    }

    return len - 1;
};