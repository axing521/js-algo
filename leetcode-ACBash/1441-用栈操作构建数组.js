/***
 * @creater:ACBash
 * @create_time:22-10-15 12:39:21
 * @last_modify:ACBash
 * @modify_time:22-10-15 12:39:27
 * @line_count:25
 **/

//纯模拟题意
//stack作为模拟栈便于理解，其实也可以删去，这样空间复杂度就是O(1)
const buildArray = (target, n) => {
    let stack = [];
    let ans = [];
    let index = 0;  //表示target目前进行对比的是哪一个

    for(let v = 1; v <= n; v++){
        if(index >= target.length) break;   //target对比构建完毕

        ans.push("Push");   //读操作
        stack.push(v);

        //将遍历到的list的值与target目前的值进行对比，恰是target需要的那么索引加一，continue
        if(target[index] == v){
            index++;
            continue;
        }
        
        ans.push("Pop");    //不是target需要的，删除操作
        stack.pop();
    }

    return ans;
};