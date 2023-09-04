/***
 * @creater:ACBash
 * @create_time:22-9-27 11:0:15
 * @last_modify:ACBash
 * @modify_time:22-9-27 11:7:11
 * @line_count:18
 **/

const PredictTheWinner = (nums) => {
    const len = nums.length;

    let dp = Array.from({length: len}, () => new Array(len).fill(0));

    for(let i = 0; i < len; i++){
        dp[i][i] = nums[i];
    }

    for(let i = len - 1; i >= 0; i--){
        for(let j = i; j < len; j++){
            if(j == i) dp[i][j] = nums[i];
            else dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][len - 1] >= 0;
};