/***
 * @creater:ACBash
 * @create_time:22-9-23 19:46:43
 * @last_modify:ACBash
 * @modify_time:22-9-23 20:14:36
 * @line_count:14
 **/

const uniquePaths = (m, n) => {
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