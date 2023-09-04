/***
 * @creater:ACBash
 * @create_time:21-11-3 17:18:23
 * @last_modify:ACBash
 * @modify_time:22-5-16 17:27:43
 * @line_count:63
 **/

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
const defaultCmp = (a, b) => a > b;

class Heap{
    constructor(cmp = defaultCmp){
        this.cmp = cmp;
        this.container = [];
    }

    insert(val){
        const {cmp, container} = this;

        container.push(val);

        let index = container.length - 1;
        let parent = (index - 1) >> 1;

        while(index){
            if(cmp(container[parent], container[index])) break;

            swap(container, index, parent);

            index = parent;

            parent = (index - 1) >> 1;
        }
    }

    extract(){
        if(this.container.length <= 1) return this.container.pop();

        const {cmp, container} = this;

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
        return this.container[0];
    }

    size(){
        return this.container.length;
    }
}