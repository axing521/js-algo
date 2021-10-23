/***
 * @creater:ACBash
 * @create_time:21-10-23 16:38:28
 * @last_modify:ACBash
 * @modify_time:21-10-23 19:15:30
 * @line_count:25
 **/

/* 括号匹配，栈存储索引 */
//当栈为空时且当前扫描到的符号是')'时，需要将这个符号入栈作为分割符，上一个结束的地方
//栈中初始化一个 -1，作为分割符
const longestValidParentheses = (s) => {
    let stack = [-1], longest = 0;

    for(const i in s){
        if(s[i] == "("){
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length == 0){
                stack.push(i);
            }
            longest = Math.max(longest, i - stack[stack.length-1]);
        }
    }

    return longest;
};

/* https://github.com/azl397985856/leetcode/blob/master/problems/32.longest-valid-parentheses.md */
/* DP解法，下次看看 */

console.log(longestValidParentheses("()(()"));