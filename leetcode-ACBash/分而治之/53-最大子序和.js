/***
 * @creater:ACBash
 * @create_time:21-10-19 16:4:27
 * @last_modify:ACBash
 * @modify_time:21-10-19 20:1:56
 * @line_count:71
 **/

/* 暴力法，经典超时 */
const maxSubArray = (nums) => {
    let sum = 0, max = -Infinity;
    for(let i=0; i<nums.length; i++){
        sum = 0;
        for(let j=i; j<nums.length; j++){
            sum += nums[j];
            max = Math.max(max, sum);
        }
    }
    return max;
};

/* 前缀和 */
const maxSubArray = (nums) => {
    let pre = [nums[0]], min = 0, maxSpan = nums[0];
    for(let i=1; i<nums.length; i++){
        pre[i] = pre[i-1] + nums[i];
        min = Math.min(min, pre[i-1]);
        maxSpan = Math.max(maxSpan, pre[i] - min);
    }
    return maxSpan;
};

/* 将上面的前缀和解法优化空间复杂度 */
const maxSubArray = (nums) => {
    let pre = 0, min = 0, maxSpan = nums[0];
    for(let i=0; i<nums.length; i++){
        pre += nums[i];
        maxSpan = Math.max(maxSpan, pre - min);
        min = Math.min(min, pre);
    }
    return maxSpan;
};

/* 分而治之 */
const helper = (nums, left, right) => {
    if(left === right) return nums[left];
    let sum = 0, lmax = -Infinity, rmax = -Infinity;
    const mid = ((right - left) >> 1) + left;
    const l = helper(nums, left, mid);
    const r = helper(nums, mid+1, right);       //分

    for(let i=mid; i>=left; i--){
        sum += nums[i];
        lmax = Math.max(lmax, sum);
    }
    sum = 0;
    for(let i=mid+1; i<=right; i++){
        sum += nums[i];
        rmax = Math.max(rmax, sum);
    }

    return Math.max(l, r, lmax+rmax);
};

const maxSubArray = (nums) => {
    return helper(nums, 0, nums.length-1);
};

/* DP，递推关系：Q(list, i) = Math.max(0, Q(list, i - 1)) + list[i] */
const maxSubArray = (nums) => {
    let dp = 0, max = -Infinity;
    for(let i=0; i<nums.length; i++){
        dp = Math.max(0, dp) + nums[i];
        max = Math.max(max, dp);
    }
    return max;
};

console.log(maxSubArray([-1]));