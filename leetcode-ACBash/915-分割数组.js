/***
 * @creater:ACBash
 * @create_time:22-10-25 22:9:40
 * @last_modify:ACBash
 * @modify_time:22-10-25 22:23:38
 * @line_count:35
 **/

//两次遍历
const partitionDisjoint = (nums) => {
    const n = nums.length;
    let minRight = new Array(n).fill(0);
    minRight[n - 1] = nums[n - 1];

    //构建右序列最小值数组
    for(let i = n - 2; i >= 1; i--){
        minRight[i] = Math.min(nums[i], minRight[i + 1]);
    }

    let maxLeft = nums[0];

    for(let i = 1; i <= n - 1; i++){
        if(maxLeft <= minRight[i]) return i;
        maxLeft = Math.max(nums[i], maxLeft);
    }
};

//一次遍历, leftMax表示划分的左序列的最大值，leftPos表示划分的左序列的右端位置，curMax表示当前遍历到的最大值
const partitionDisjoint = (nums) => {
    const n = nums.length;
    let leftMax = nums[0], curMax = nums[0], leftPos = 0;

    for(let i = 1; i <= n - 1; i++){
        curMax = Math.max(curMax, nums[i]);

        if(nums[i] < leftMax){
            leftMax = curMax;
            leftPos = i;
        }
    }

    return leftPos + 1;
};