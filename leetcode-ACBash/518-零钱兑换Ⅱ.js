/***
 * @creater:ACBash
 * @create_time:22-9-25 14:3:32
 * @last_modify:ACBash
 * @modify_time:22-9-25 15:48:56
 * @line_count:15
 **/

const change = (amount, coins) => {
    let dp = new Array(amount + 1).fill(0);
    
    dp[0] = 1;

    for(let i = 1; i <= coins.length; i++){
        for(let j = 1; j <= amount; j++){
            if(j >= coins[i - 1]){
                dp[j] += dp[j - coins[i - 1]];
            }
        }
    }

    return dp[amount];
};