/***
 * @creater:ACBash
 * @create_time:21-10-20 21:46:6
 * @last_modify:ACBash
 * @modify_time:21-10-20 22:7:12
 * @line_count:63
 **/

/* 测试用例 */
/* console.log(largestRectangleArea([2,1,5,6,2,3])); */
/* console.log(largestRectangleArea([2,4])); */

/* 1.自己写的两个for循环，压栈，93/96，时间超出 */
const largestRectangleArea = (heights) => {
    let n = heights.length;
    let stack0 = [];
    for(let i=0; i<n; i++){
        let area = heights[i], areaMin = heights[i];
        
        for(let j=i, base=i; j<n; j++){
            if(j===n-1){
                stack0.push(area); break;
            } 
            if(heights[j+1]>=heights[base]){
                area += areaMin;
            }else{
                stack0.push(area);
                base = j+1;
                areaMin = heights[j+1];
                area = areaMin * (j-i+2);
            }
        }
    }
    return Math.max(...stack0);
};

/* 2.最牛逼的单调栈,如果要是空栈，那么在heights两头+0，那么省去最后的while循环 */
const largestRectangleArea = (heights) => {
    let stack0 = [-1];
    let maxArea = 0;

    for(let i=0; i<heights.length; i++){
        while(stack0.length>1 && heights[stack0[stack0.length-1]]>=heights[i]){
            maxArea = Math.max(maxArea, heights[stack0.pop()] * (i-stack0[stack0.length-1]-1));
        }
        stack0.push(i);
    }

    while(stack0.length>1){
        maxArea = Math.max(maxArea, heights[stack0.pop()] * (heights.length-stack0[stack0.length-1]-1));
    }
    return maxArea;
};

/* 最佳实践 */
//（左边，用于while循环内pop后的stack可能会空栈情况，右边，弹出栈内所有
const largestRectangleArea = (heights) => {
    let stack = [], maxArea = 0;
    heights = [0,...heights,0];     //细品这左右两哨兵的作用
    for(let i=0; i<heights.length; i++){
        while(stack.length && heights[stack[stack.length-1]] > heights[i]){
            //好好想想这段代码什么意思
            maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length-1] - 1));    
        }
        stack.push(i);
    }

    return maxArea;
};

console.log(largestRectangleArea([5,4,1,2]));