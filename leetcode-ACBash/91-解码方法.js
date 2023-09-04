/***
 * @creater:ACBash
 * @create_time:22-9-28 11:5:4
 * @last_modify:ACBash
 * @modify_time:22-9-28 11:52:46
 * @line_count:17
 **/

//爬楼梯问题
const numDecodings = (s) => {
    let dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = s[0] == "0" ? 0 : 1;

    for(let i = 2; i <= s.length; i++){
        let oneCode = +s[i - 1];
        let twoCode = +(s[i - 2] + s[i - 1]);

        if(twoCode >= 10 && twoCode <= 26) dp[i] = dp[i - 2];
        if(oneCode >= 1 && oneCode <= 9) dp[i] += dp[i - 1];
    }

    return dp[s.length];
};