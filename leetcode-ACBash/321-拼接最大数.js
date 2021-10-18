/***
 * @creater:ACBash
 * @create_time:21-10-18 16:7:7
 * @last_modify:ACBash
 * @modify_time:21-10-18 20:5:50
 * @line_count:41
 **/

/* 分而治之+单调栈，牛大了属于是，但是是2000ms */
/* 这里的k表示nums里保留k位数字 */
const pickMax = (nums,k) => {
    let stack = [];
    let drop = nums.length - k;

    for(let i=0; i<nums.length; i++){
        while(stack.length && stack[stack.length-1] < nums[i] && drop){
            stack.pop();
            drop--;
        }
        stack.push(nums[i]);
    }
    while(drop--){
        stack.pop();
    }
    return stack;
};

const merge = (A,B) => {
    let ans = [];
    while(A.length || B.length){
        let bigger = A > B ? A : B;
        ans.push(bigger.shift());
    }
    return ans;
};

const maxNumber = (nums1,nums2,k) => {
    let ans = [];
    for(let i=0; i<=k; i++){
        if(i <= nums1.length && k-i <= nums2.length){
            ans = ans > merge(pickMax(nums1,i), pickMax(nums2,k-i)) ? ans : merge(pickMax(nums1,i), pickMax(nums2,k-i));
        }
    }
    return ans;
};

/* 有用贪心解出来的老哥，90ms，leetcode收藏了，下次写写看 */

console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5));