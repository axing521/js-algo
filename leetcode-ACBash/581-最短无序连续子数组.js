/***
 * @creater:ACBash
 * @create_time:21-10-17 19:37:56
 * @last_modify:ACBash
 * @modify_time:21-10-18 15:4:57
 * @line_count:97
 **/

/* 自己写的单调栈，失败 */
/* const findUnsortedSubarray = (nums) => {
    let stackL = [], stackR = [];
    for(let i=0; i<nums.length; i++){
        if(stackL.length && stackL[stackL.length-1] > nums[i]){
            while(stackL.length && stackL[stackL.length-1] > nums[i]){
                stackL.pop();
            }
            break;
        }
        stackL.push(nums[i]);
    }
    for(let i=nums.length-1; i>=0; i--){
        if(stackR.length && stackR[stackR.length-1] < nums[i]){
            while(stackR.length && stackR[stackR.length-1] < nums[i]){
                stackR.pop();
            }
            break;
        }
        stackR.push(nums[i]);
    }
    console.log(stackL, stackR);

    return nums.length > stackL.length + stackR.length ? nums.length - stackL.length - stackR.length : 0;
}; */

/* 排序前后比较就可以找出最短无序连续子数组，我怎么没想到呢！ */
const isSorted = (nums) => {
    for(let i=1; i<nums.length; i++){
        if(nums[i] < nums[i-1]){
            return false;
        }
    }
    return true;
};

const findUnsortedSubarray = (nums) => {
    if(isSorted(nums)) return 0;
    const numsSorted = [...nums].sort((a,b) => a-b);

    let left = 0;
    while(nums[left] === numsSorted[left]){
        left++;
    }
    let right = nums.length-1;
    while(nums[right] == numsSorted[right]){
        right--;
    }
    return right - left + 1;
};

/* 一次遍历双指针，正序leftmax找右指针，逆序rightmin找左指针 */
const findUnsortedSubarray = (nums) => {
    let max = -Number.MAX_VALUE, right = -1;
    let min = Number.MAX_VALUE, left = -1;

    for(let i=0; i<nums.length; i++){
        if(max > nums[i]){
            right = i;
        }else{
            max = nums[i];
        }

        if(min < nums[nums.length-i-1]){
            left = nums.length-i-1;
        }else{
            min = nums[nums.length-i-1];
        }
    }

    return right === -1 ? 0 : right-left+1;
};

/* 单调栈 */
const findUnsortedSubarray = (nums) => {
    const stack = [];
    let left = nums.length, right = 0;

    for(let i=0; i<nums.length; i++){
        while(stack.length && nums[stack[stack.length-1]] > nums[i]){
            left = Math.min(left, stack.pop());
        }
        stack.push(i);
    }
    stack.length = 0;
    for(let i=nums.length-1; i>=0; i--){
        while(stack.length && nums[stack[stack.length-1]] < nums[i]){
            right = Math.max(right, stack.pop());
        }
        stack.push(i);
    }

    return right - left + 1 > 0 ? right - left + 1 : 0;
};

/* 看到有个写二分的，下次看看 */
console.log(findUnsortedSubarray([1,3,5,4,2]));