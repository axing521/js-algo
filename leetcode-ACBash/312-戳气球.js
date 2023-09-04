/***
 * @creater:ACBash
 * @create_time:22-9-27 11:26:7
 * @last_modify:ACBash
 * @modify_time:22-9-27 13:56:7
 * @line_count:26
 **/

const maxCoins = (nums) => {
    nums.unshift(1);
    nums.push(1);

    const len = nums.length;

    let dp = Array.from({length: len}, () => new Array(len).fill(0));

    for(let i = 0; i < len; i++){
        dp[i][i] = nums[i]; //0也可以
    }

    for(let i = len - 1; i >= 0; i--){
        for(let j = i; j < len; j++){
            if(i == j){
                dp[i][j] = nums[i];
                continue;
            }
            for(let k = i + 1; k < j; k++){
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]);
            }
        }
    }

    return dp[0][len - 1];
};