/***
 * @creater:ACBash
 * @create_time:21-10-13 21:59:9
 * @last_modify:ACBash
 * @modify_time:21-10-13 22:29:29
 * @line_count:22
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