// 给定一个整数数组coins，表示不同面额的硬币，以及一个整数amount，表示总金额，计算返回凑成amount的最少硬币个数，每种硬币数量无限
// dp， 初始化为Infinity，dp[0] = 0，两个for循环，外层遍历硬币面额，内层遍历整数，在j >= coins[i]时 dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);

const func1 = (coins, amount) => {
    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for(let i = 0; i < coins.length; i++){
        for(let j = 1; j <= amount; j++){
            if(j >= coins[i]){
                dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
            }
        }
    }

    return dp[amount] == Infinity ? -1 : dp[amount];
};