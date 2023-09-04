/***
 * @creater:ACBash
 * @create_time:22-9-25 15:48:52
 * @last_modify:ACBash
 * @modify_time:22-9-26 0:4:22
 * @line_count:32
 **/

 const stoneGame = (piles) => {
    let dp = Array.from({length: piles.length}, () => new Array(piles.length).fill(0));

    for(let i = 0; i < piles.length; i++){
        dp[i][i] = piles[i];
    }

    for(let i = piles.length - 2; i >= 0; i--){
        for(let j = i + 1; j < piles.length; j++){
            dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
        }
    }

    return dp[0][piles.length - 1] > 0;
};

//滚动数组优化
const stoneGame = (piles) => {
    let dp = new Array(piles.length).fill(0);

    for(let i = 0; i < piles.length; i++){
        dp[i] = 0;
    }

    for(let i = piles.length - 2; i >= 0; i--){
        for(let j = i + 1; j < piles.length; j++){
            dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
        }
    }

    return dp[piles.length - 1] > 0;
};