/***
 * @creater:ACBash
 * @create_time:21-10-14 21:24:52
 * @last_modify:ACBash
 * @modify_time:21-10-16 16:21:18
 * @line_count:17
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

console.log(dailyTemperatures([30,60,90]));