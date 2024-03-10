// 给定n个非负整数表示每个宽度为1的柱形图，计算按此排列的柱子，在下雨之后能接多少雨水
// [1, 2], 维护一个高度单调减栈，保存索引值，遍历柱形图，在遇到柱子高于栈顶时候，弹出栈顶（底座高度），木板效应是i柱子高度和此时栈顶的最小值，宽度是i和栈顶索引的差值 - 1

const func1 = (height = [0,1,0,2,1,0,1,3,2,1,2,1]) => {
    let ans = 0;
    const stack = [];
    const n = height.length;

    for(let i = 0; i < n; i++){
        while(stack.length && height[i] > height[stack[stack.length - 1]]){
            const top = stack.pop();

            if(!stack.length) break;

            const left = stack[stack.length - 1];
            const currWidth = i - left - 1;
            const currHeight = Math.min(height[left], height[i]) - height[top];
            ans += currWidth * currHeight;
        }

        stack.push(i);
    }

    return ans;
};