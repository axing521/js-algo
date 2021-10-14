/***
 * @creater:ACBash
 * @create_time:21-10-13 21:59:9
 * @last_modify:ACBash
 * @modify_time:21-10-14 15:28:48
 * @line_count:73
 **/

/* LC:双数组，牛逼就完事了，柱状图问题，这个题解没有用到单调栈吧？。。 */
const trap = (height) => {
    let max = 0;
    let volume = 0;
    const leftMax = [];
    const rightMax = [];

    for(let i=0; i<height.length; i++){
        leftMax[i] = max = Math.max(height[i], max);
    }
    max = 0;

    for(let i=height.length-1; i>=0; i--){
        rightMax[i] = max = Math.max(height[i], max);
    }

    for(let i=0; i<height.length; i++){
        volume = volume + Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return volume;
};

/* LC:双指针，相对于双数组来说，空间复杂度从O(N)优化到O(1) */
const trap = (height) => {
    let leftMax = 0, rightMax = 0;
    let left = 0, right = height.length-1, ans = 0;

    while(left < right){
        if(height[left] < height[right]){
            if(height[left] < leftMax){
                ans += leftMax - height[left];
            }else{
                leftMax = height[left];
            }
            left++;
        }else{
            if(height[right] < rightMax){
                ans += rightMax - height[right];
            }else{
                rightMax = height[right];
            }
            right--
        }
    }
    
    return ans;
};

/* LC：单调栈，还没仔细看怎么写的 */
var trap = function(height) {
    let ans = 0;
    const stack = [];
    const n = height.length;
    for (let i = 0; i < n; ++i) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();
            if (!stack.length) {
                break;
            }
            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }
        stack.push(i);
    }
    return ans;
};

/* LC:看到有用DP解的...牛大了，下次写写看 */

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));