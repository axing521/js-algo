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
