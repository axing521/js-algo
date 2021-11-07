/***
 * @creater:ACBash
 * @create_time:21-11-4 22:18:51
 * @last_modify:ACBash
 * @modify_time:21-11-7 13:1:11
 * @line_count:268
 **/

/* 1.暴力法，无脑简单
 * 2.BST结构，小优简单，插入操作 + 按序遍历
 * 3.堆结构，大优，但是JS中要手写堆结构
 * 4.二分法，大优，而且空间复杂度要小一点
 */

/* 暴力法，3000ms */
class KthLargest{
    constructor(k, nums){
        this.nums = nums;
        this.rank = k;
    }

    add(val){
        this.nums.push(val);
        this.nums.sort((a, b) => b - a);
        return this.nums[this.rank - 1];
    }
}

/* BST结构，900ms */
class TreeNode{
    constructor(val, left, right, count){
        this.val = val;
        this.left = left ? left : null;
        this.right = right ? right : null;
        this.count = count ? count : 1;
    }
}

const insertIntoBST = (root, num) => {
    if(!root) return null;

    if(num > root.val){
        if(!root.right) return root.right = new TreeNode(num);
        return insertIntoBST(root.right, num);
    }else if(num < root.val){
        if(!root.left) return root.left = new TreeNode(num);
        return insertIntoBST(root.left, num);
    }else{
        root.count++;
    }

    return root;
};  //二叉树的插入操作

class KthLargest{
    constructor(k, nums){
        let root = nums.length ? new TreeNode(nums[0]) : null;
        for(let i=1; i<nums.length; i++) insertIntoBST(root, nums[i]);

        this.root = root;
        this.rank = k;
    }

    add(val){
        if(!this.root) this.root = new TreeNode(val);
        else insertIntoBST(this.root, val);

        let stack = [], node = this.root, count = this.rank; 

        while(node || stack.length){
            while(node){
                stack.push(node);
                node = node.right;
            }

            node = stack.pop();
            count -= node.count;
            if(count <= 0) return node.val;
            node = node.left;
        }

        return undefined;
    }
}

/* 由295-数据流的中位数，堆的启发,120ms */
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

class KthLargest{
    constructor(k, nums){
        this.minHeap = new Heap((a, b) => a < b);
        this.k = k;
        for(const num of nums) this.minHeap.insert(num);
        for(let i=this.minHeap.container.length; i>this.k; i--){
            this.minHeap.extract();
        }
    }

    add(val){
        this.minHeap.insert(val);

        for(let i=this.minHeap.container.length; i>this.k; i--){
            this.minHeap.extract();
        }

        return this.minHeap.top();
    }
}

/* LC,其实是把上面这个启发的方法做一下优化，俗称“优先队列” */
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

class KthLargest{
    constructor(k, nums){
        this.k = k;
        this.minHeap = new Heap((a, b) => a < b);

        for(const num of nums) this.add(num);
    }

    add(val){
        this.minHeap.insert(val);

        if(this.minHeap.container.length > this.k) this.minHeap.extract();

        return this.minHeap.top();
    }
}

/* LC,二分 */
class KthLargest{
    constructor(k, nums){
        this.k = k;
        this.nums = nums;
        this.nums.sort((a, b) => b - a);
    }

    searchInsert(val){
        const len = this.nums.length;
        let left = 0, right = len - 1, ans = len;

        while(left <= right){
            let mid = (left + right) >> 1;

            if(val == this.nums[mid]){
                return mid;
            }else if(val < this.nums[mid]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return right + 1;
    }

    add(val){
        this.nums.splice(this.searchInsert(val), 0, val);

        return this.nums[this.k - 1];
    }
}