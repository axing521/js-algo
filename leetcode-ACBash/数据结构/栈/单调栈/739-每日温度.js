/***
 * @creater:ACBash
 * @create_time:21-10-14 21:24:52
 * @last_modify:ACBash
 * @modify_time:21-10-20 22:25:26
 * @line_count:31
 **/

/* 单调栈，经典 */
const dailyTemperatures = (temperatures) => {
    let stack = [];
    let ans = new Array(temperatures.length).fill(0);

    for(let i=0; i<temperatures.length; i++){
        while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i]){
            ans[stack[stack.length-1]] = i - stack[stack.length-1];
            stack.pop();
        }
        stack.push(i);
    }

    return ans;
};

/* 最佳实践 */
const dailyTemperatures = (nums) => {
    let stack = [], ans = new Array(nums.length).fill(0);

    for(let i=0; i<nums.length; i++){
        while(stack.length && nums[stack[stack.length-1]] < nums[i]){
            ans[stack[stack.length-1]] = i - stack.pop();
        }
        stack.push(i);
    }

    return ans;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));