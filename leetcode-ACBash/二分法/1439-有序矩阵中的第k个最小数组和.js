/***
 * @creater:ACBash
 * @create_time:21-12-17 22:1:57
 * @last_modify:ACBash
 * @modify_time:21-12-19 14:0:38
 * @line_count:182
 **/

/* 看似暴力，实则贪心，140ms，43MB */
const kthSmallest = (mat, k) => {
    let last_row = [0];

    for(let i = 0; i < mat.length; i++){
        let new_row = [];

        for(let j = 0; j < mat[0].length; j++){
            for(const p of last_row){
                new_row.push(p + mat[i][j]);
            }
        }

        new_row.sort((a, b) => a - b);

        if(k < new_row.length) last_row = new_row.slice(0, k);
        else last_row = new_row;
    }

    return last_row[k - 1];
};

/* 堆,350ms,46MB */
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

const kthSmallest = (mat, k) => {
    let maxHeap = new Heap(), preArr = Array.from(maxHeap.container), ans = -1;

    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[0].length; j++){
            if(i == 0){
                maxHeap.insert(mat[i][j]);
                continue;
            }

            for(const pre of preArr){
                maxHeap.insert(pre + mat[i][j]);
            }
        }
        
        while(maxHeap.size() > k) maxHeap.extract();
        ans = maxHeap.top();
        preArr = Array.from(maxHeap.container);
        maxHeap.container = [];
    }

    return ans;
};

/* 二分法,64ms,双百,确实牛逼，得细细品 */
/* 与378. 有序矩阵中第K小的元素相似，采用二分法。这里二分的是“值”，而不是“索引”。
初始化left, right = sum(matrix[*][0]), sum(matrix[*][-1])，那么第k小的数组和一定在[left, right]中。我们对这个区间进行二分，计算小于等于mid的数的个数count。
如果k > count，那么第k小的组和一定属于(mid, right]区间
如果k <= count，那么第k小的数组和一定属于[left, mid]区间
不断缩小区间，当left == right时，就找到了答案。
代码中，函数count_less_equal_that_mid用dfs的方法在矩阵mat找小于等于mid的个数count并返回。注意，当count > k时，及时返回，否则会超时。 */
const count_less_equal_that_mid = (mat, mid, index, s, k) => {
    if(index == mat.length) return 1;

    let count = 0;

    for(let i = 0; i < mat[0].length; i++){
        if(s + mat[index][i] - mat[index][0] <= mid){
            count += count_less_equal_that_mid(mat, mid, index + 1, s + mat[index][i] - mat[index][0], k);
            
            if(count >= k) return count;
        }else break;
    }

    return count;
}

const kthSmallest = (mat, k) => {
    const m = mat.length, n = mat[0].length;
    let left = mat.reduce((prev, cur) => prev + cur[0], 0);
    let right = mat.reduce((prev, cur) => prev + cur[n - 1], 0);
    let init = left;

    while(left < right){
        const mid = (left + right) >> 1;
        const count = count_less_equal_that_mid(mat, mid, 0, init, k);

        if(count < k) left = mid + 1;
        else right = mid;
    }

    return right;
};

/* 最小堆,源码涉及python的元组，以后看看
 * https://leetcode-cn.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solution/bao-li-jie-fa-zui-xiao-dui-by-coldme-2/
 */
const kthSmallest = (mat, k) => {
    const m = mat.length, n = mat[0].length;
    let pointers = new Array(m).fill(0), minHeap = new Heap((a, b) => a < b), heap = [], cur_sum = 0;

    for(let i = 0; i < m; i++){
        cur_sum += mat[i][0];
    }

    minHeap.insert([cur_sum, pointers]);

    let seen = new Set();
    seen.add(pointers);

    while(k--){
        let [cur_sum, pointer] = minHeap.extract();

        for(let i = 0; i < m; i++){
            if(pointers[i] < n - 1){
                let new_pointers = Array.from(pointers);
                new_pointers[i] = j + 1;
            }
        }
    }

    return cur_sum;
};

/* DP？参考“超级丑数”，下次看看 */