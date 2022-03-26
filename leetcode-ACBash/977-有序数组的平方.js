/***
 * @creater:ACBash
 * @create_time:22-3-26 15:37:25
 * @last_modify:ACBash
 * @modify_time:22-3-26 15:57:10
 * @line_count:22
 **/

/* 暴力 */
const sortedSquares = (nums) => {
    return nums.map(num => num ** 2).sort((a, b) => a - b);
};

/* 双指针 */
const sortedSquares = (nums) => {
    const len = nums.length;
    let left = 0, right = len - 1, ans = [];
    
    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            ans.push(nums[left] ** 2);
            left++;
        }else{
            ans.push(nums[right] ** 2);
            right--;
        }
    }

    return ans.reverse();
};