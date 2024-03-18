// 一个机器人位于 m * n 网格的左上角，每次只能向右或下移动一步，最终到右下角总共有多少条不同路径？

// DP, dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; if(i == 0 || j == 0) dp[i][j] = 1;
const func1 = (m, n) => {
    let dp = Array.from({length: m}, () => new Array(n).fill(0));

    dp[0][0] = 1;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(i == 0 || j == 0) dp[i][j] = 1;
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};