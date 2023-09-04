/***
 * @creater:ACBash
 * @create_time:22-10-11 17:47:19
 * @last_modify:ACBash
 * @modify_time:22-10-11 18:11:17
 * @line_count:24
 **/

const countBits = (n) => {
    let ans = new Array(n + 1).fill(0);

    for(let i = 0; i <= n; i++){
        for(let j = 0; j <= 31; j++){
            let bit = 1 << j;
    
            if(i & bit) ans[i]++;
        }
    }

    return ans;
};

//DP,LC题解
const countBits = (n) => {
    let dp = new Array(n + 1).fill(0);

    for(let i = 1; i <= n; i++){
        dp[i] = dp[i & (i - 1)] + 1;
    }

    return dp;
};