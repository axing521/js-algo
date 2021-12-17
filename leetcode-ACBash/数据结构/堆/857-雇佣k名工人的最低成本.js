/***
 * @creater:ACBash
 * @create_time:21-12-17 15:8:27
 * @last_modify:ACBash
 * @modify_time:21-12-17 22:2:12
 * @line_count:93
 **/

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

const mincostToHireWorkers = (quality, wage, k) => {
    let arr = quality.map((val, index) => {
        return {
            "ratio": val / wage[index],
            "quality": val
        }
    });

    arr.sort((a, b) => b.ratio - a.ratio);  //降序排列性价比,便于while循环中短板效应=sum / arr[index].ratio

    let maxHeap = new Heap();
    let index = 0, sum = 0, ans = Infinity;

    while(index < arr.length){
        if(maxHeap.size() < k){
            maxHeap.insert(arr[index].quality);
            sum += arr[index].quality;
        }

        if(maxHeap.size() == k){
            ans = Math.min(ans, sum / arr[index].ratio);
            sum -= maxHeap.extract();
        }

        index++;
    }

    return ans;
};