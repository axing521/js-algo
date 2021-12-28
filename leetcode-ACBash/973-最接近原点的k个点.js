/***
 * @creater:ACBash
 * @create_time:21-12-27 15:22:30
 * @last_modify:ACBash
 * @modify_time:21-12-28 15:2:54
 * @line_count:126
 **/

/* 全排序，200ms，58MB */
const distance = (point) => {
    const [x, y] = point;

    return Math.sqrt(x ** 2 + y ** 2);
};

const kClosest = (points, k) => {
    const bundles = points.map(point => {
        const dist = distance(point);

        point.push(dist);

        return point;
    });

    bundles.sort((a, b) => a[2] - b[2]);

    return bundles.slice(0, k).map(bundle => bundle.slice(0, 2));
};

/* 少用API，多用底层数据结构，230ms，55MB */
const distance = (point) => {
    const [x, y] = point;

    return Math.sqrt(x ** 2 + y ** 2);
};

const kClosest = (points, k) => {
    let map = new Map();

    for(const point of points){
        map.set(point, distance(point)); //会有重复的点吗？
    }

    points.sort((a, b) => map.get(a) - map.get(b));

    return points.slice(0, k);
};

/* 堆，大顶堆/小顶堆 */
const defaultCmp = (a, b) => a[2] > b[2];
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

const distance = (point) => {
    const [x, y] = point;

    return Math.sqrt(x ** 2 + y ** 2);
};

const kClosest = (points, k) => {
    let maxHeap = new Heap();

    for(const point of points){
        const val = [...point, distance(point)];
        
        maxHeap.insert(val);

        if(maxHeap.size() > k) maxHeap.extract();
    }

    return maxHeap.container.map(val => val.slice(0, 2));
};

/* 快速排序，下次看看，力扣收藏夹 */