/***
 * @creater:ACBash
 * @create_time:21-12-20 15:55:22
 * @last_modify:ACBash
 * @modify_time:21-12-21 12:44:12
 * @line_count:86
 **/

/* 事后诸葛亮 */
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

    size(){
        return this.container.length;
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

const minRefuelStops = (target, startFuel, stations) => {
    stations.push([target, 0]);

    let cur = startFuel, ans = 0, last = 0, maxHeap = new Heap();

    for(const [i, fuel] of stations){
        cur -= i - last;

        while(cur < 0 && maxHeap.size()){
            cur += maxHeap.extract();
            ans += 1;
        }

        if(cur < 0) return -1;

        maxHeap.insert(fuel);

        last = i;
    }

    return ans;
};