/***
 * @creater:ACBash
 * @create_time:21-12-21 12:44:9
 * @last_modify:ACBash
 * @modify_time:21-12-22 20:44:51
 * @line_count:106
 **/

/* 能否用“事后诸葛亮”解决？一次贪心？这里遍历两次才行 */
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

    size(){
        return this.container.length;
    }
}
//rains = [1,2,0,2,3,0,1]
const avoidFlood = (rains) => {
    let lakes = {};

    for(let i = 0; i < rains.length; i++){
        const id = rains[i];
        
        if(id != 0){
            lakes[id] = (lakes[id] || []);
            lakes[id].push(i);
        }
    }   //各个湖的下雨天数分布: lakes，即拿到*天气预报*

    let minHeap = new Heap((a, b) => a < b), set = new Set(), ans = []; //最小堆的意义：谁小谁就能插队，“不好意思哥们，我待会比你早下雨，我往前稍稍吧
    
    for(let i = 0; i < rains.length; i++){
        const id = rains[i];    //rains = [1,2,0,2,3,0,1], ans = [-1,-1,2,-1,-1,1,-1]
        
        if(id != 0){
            if(set.has(id)) return [];
            else{
                ans.push(-1);
                set.add(id);

                lakes[id].shift();

                if(lakes[id].length){
                    minHeap.insert(lakes[id][0]);
                }   //后面还要下雨,minHeap = [], set = (1,2,3), lakes = ["1": [], "2": [], "3": []]
            }
        }else{
            if(!minHeap.size()) ans.push(1);
            else{
                const index = minHeap.extract();

                ans.push(rains[index]);
                set.delete(rains[index]);
            }
        }
    }
    
    return ans;
};