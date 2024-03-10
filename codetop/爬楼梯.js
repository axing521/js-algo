// 爬楼梯，n个台阶，每次可以爬1或2个台阶，求问有多少中不同的方法爬到楼顶？
// DP递推：dp[i] = dp[i - 1] + dp[i - 2];

const func1 = (n) => {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++){
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

// 状态压缩

const func2 = (n) => {
    if(n == 1 || n == 0) return 1;
    let x = 1, y = 1, z;

    for(let i = 2; i <= n; i++){
        z = x + y;
        x = y;
        y = z;
    }

    return z;
};