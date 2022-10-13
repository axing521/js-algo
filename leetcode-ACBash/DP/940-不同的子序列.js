/***
 * @creater:ACBash
 * @create_time:22-10-14 1:15:30
 * @last_modify:ACBash
 * @modify_time:22-10-14 1:15:30
 * @line_count:18
 **/

const distinctSubseqII = (s) => {
    const MOD = 1000000007;

    let dp = new Array(26).fill(0);

    const n = s.length;
    let ans = 0;

    for(let i = 0; i < n; i++){
        const ci = s[i].charCodeAt() - 97;
        const prev = dp[ci];
        
        dp[ci] = (ans + 1) % MOD;
        ans = ((ans + dp[ci] - prev) % MOD + MOD) % MOD;
    }

    return ans;
};