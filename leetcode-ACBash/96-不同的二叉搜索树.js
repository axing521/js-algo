/***
 * @creater:ACBash
 * @create_time:22-10-5 0:36:5
 * @last_modify:ACBash
 * @modify_time:22-10-5 1:0:14
 * @line_count:26
 **/

//卡塔兰数公式
const numTrees = (n) => {
    let C = 1;

    for(let i = 0; i < n; i++){
        C *= 2 * (2 * i + 1) / (i + 2);
    }

    return C;
};

//DP
const numTrees = (n) => {
    let dp = new Array(n + 1).fill(0);  //前n个数字能组成不同BST的个数

    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++){
        for(let j = 1; j <= i; j++){
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }

    return dp[n];
};