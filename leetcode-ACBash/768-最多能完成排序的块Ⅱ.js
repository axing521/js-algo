/***
 * @creater:ACBash
 * @create_time:21-10-23 14:39:39
 * @last_modify:ACBash
 * @modify_time:21-10-23 15:54:19
 * @line_count:23
 **/

/* 单调栈yyds */
const maxChunksToSorted = (nums) => {
    let stack = [];

    for(const i in nums){
        if(stack.length && stack[stack.length-1] > nums[i]){
            const chunkMax = stack.pop();
            while(stack[stack.length-1] > nums[i]){
                stack.pop();
            }
            stack.push(chunkMax);
        }else{
            stack.push(nums[i]);
        }
    }
    /* console.log(stack); */

    return stack.length;
};

/* 看到有滑动窗口解的，下次看看 */

console.log(maxChunksToSorted([1,1,0,0,1]));