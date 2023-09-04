/***
 * @creater:ACBash
 * @create_time:22-9-25 14:4:43
 * @last_modify:ACBash
 * @modify_time:22-9-25 14:24:41
 * @line_count:15
 **/

const largestNumber = (cost, target) => {
    let dp = new Array(target + 1).fill(BigInt(-9999999));
    
    dp[0] = 0n;

    for(let i = 9; i > 0; i--){
        for(let j = 1; j <= target; j++){
            if(j >= cost[i - 1]){
                if(dp[j] < (dp[j - cost[i - 1]] * 10n) + BigInt(i)) dp[j] = (dp[j - cost[i - 1]] * 10n) + BigInt(i);
            }
        }
    }

    return dp[target] > 0 ? dp[target].toString() : "0";
};