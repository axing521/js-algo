/***
 * @creater:ACBash
 * @create_time:22-9-25 14:34:42
 * @last_modify:ACBash
 * @modify_time:22-9-25 15:26:25
 * @line_count:15
 **/

const coinChange = (coins, amount) => {
    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for(let i = 1; i <= coins.length; i++){
        for(let j = 1; j <= amount; j++){
            if(j >= coins[i - 1]){
                dp[j] = Math.min(dp[j], dp[j - coins[i - 1]] + 1);
            }
        }
    }

    return dp[amount] == Infinity ? -1 : dp[amount];
};