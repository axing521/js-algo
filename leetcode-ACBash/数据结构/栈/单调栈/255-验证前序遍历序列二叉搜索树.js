/***
 * @creater:ACBash
 * @create_time:21-10-20 22:7:7
 * @last_modify:ACBash
 * @modify_time:21-10-21 15:23:55
 * @line_count:15
 **/

/* LC会员题目：LC-255 | 验证前序遍历序列二叉搜索树 */
/* https://blog.csdn.net/Twinkle_sone/article/details/120587184 */
const verifyPreorder = (nums) => {
    let stack = [], flag = -Infinity;   //flag = Root:left-Has-Been-Serached

    for(let cur of nums){
        while(stack.length && stack[stack.length-1] < cur){
            flag = stack.pop();
        }
        if(cur < flag) return false;
        stack.push(cur);
    }

    return true;
};