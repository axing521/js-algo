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
const longestValidParentheses = s => {
    let stack = [-1],
        longest = 0;

    for (const i in s) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length == 0) {
                stack.push(i);
            }
            longest = Math.max(longest, i - stack[stack.length - 1]);
        }
    }

    return longest;
};

/* https://github.com/azl397985856/leetcode/blob/master/problems/32.longest-valid-parentheses.md */
/* DP解法，下次看看 */
const func2 = s => {
    let ans = 0,
        len = s.length;
    let dp = new Array(len + 1).fill(0); // 索引表示字符串长度，值表示该长度字符串情况下的以最后一个字符结尾的最长连续有效括号长度

    for (let i = 1; i < len + 1; i++) {
        if (s[i - 1] == '(') continue;

        let left_paren = i - 2 - dp[i - 1];

        if (left_paren >= 0 && s[left_paren] == '(') {
            dp[i] = dp[i - 1] + 2;

            if (dp[i - dp[i]]) {
                dp[i] += dp[i - dp[i]];
            }

            ans = Math.max(ans, dp[i]);
        }
    }

    return ans;
};

console.log(longestValidParentheses('()(()'));
