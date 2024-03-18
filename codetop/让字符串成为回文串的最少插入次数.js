// https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/72022/bao-bao-ye-neng-kan-dong-de-leetcode-ti-jie-dp-by-/
const func1 = s => {
    const len = s.length;
    let dp = [];

    for (let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(0);
        dp[i][i + 1] = s[i] === s[i + 1] ? 0 : 1;
    }

    for (let i = 2; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            dp[j][j + i] =
                s[j] === s[j + i]
                    ? dp[j + 1][j + i - 1]
                    : 1 + Math.min(dp[j + 1][j + i], dp[j][j + i - 1]);
        }
    }

    return dp[0][len - 1];
};
