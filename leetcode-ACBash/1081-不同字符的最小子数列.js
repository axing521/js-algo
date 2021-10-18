/***
 * @creater:ACBash
 * @create_time:21-10-18 16:19:27
 * @last_modify:ACBash
 * @modify_time:21-10-18 16:20:35
 * @line_count:29
 **/

/* 和LC: 316-去除重复字母 相同 */
/* 单调栈yyds */
const smallestSubsequence = (s) => {
    let counts = new Array(26).fill(0), stack = [], i = s.length;
    while(i--) counts[s.charCodeAt(i) - 97]++;
    while(++i < s.length){
        const n = s.charCodeAt(i);
        counts[n-97]--;
        if(!stack.includes(n)){
            let j = stack.length;
            while(j-- && stack[j] > n && counts[stack[j] - 97]) stack.pop();
            stack.push(n);
        }
    }
    return String.fromCharCode(...stack);
};

/* 对上面简化了中间变量，以及不需要使用counts记录剩余字符个数情况 */
const smallestSubsequence = (s) => {
    let stack = [];
    for(let i=0; i<s.length; i++){
        if(stack.includes(s[i])) continue;
        while(stack.length && stack[stack.length-1] > s[i] && s.includes(stack[stack.length-1], i)){
            stack.pop();
        }
        stack.push(s[i]);
    }
    return stack.join("");
}