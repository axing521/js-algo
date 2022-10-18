/***
 * @creater:ACBash
 * @create_time:22-10-18 15:27:37
 * @last_modify:ACBash
 * @modify_time:22-10-18 15:29:47
 * @line_count:22
 **/

//数位DP
var atMostNGivenDigitSet = function(digits, n) {
    const s = '' + n;
    const m = digits.length, k = s.length;
    const dp = new Array(k + 1).fill(0).map(() => new Array(2).fill(0));
    dp[0][1] = 1;
    for (let i = 1; i <= k; i++) {
        for (let j = 0; j < m; j++) {
            if (digits[j][0] === s[i - 1]) {
                dp[i][1] = dp[i - 1][1];
            } else if (digits[j][0] < s[i - 1]) {
                dp[i][0] += dp[i - 1][1];
            } else {
                break;
            }
        }
        if (i > 1) {
            dp[i][0] += m + dp[i - 1][0] * m;
        }
    }
    return dp[k][0] + dp[k][1];
};