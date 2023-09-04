/***
 * @creater:ACBash
 * @create_time:22-10-3 0:5:15
 * @last_modify:ACBash
 * @modify_time:22-10-3 0:5:17
 * @line_count:23
 **/

//dp
const rob = (nums) => {
    let dp = new Array(nums.length + 2).fill(0);

    for(let i = 2; i < dp.length; i++){
        dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
    }

    return dp[dp.length - 1];
};

//空间优化
const rob = (nums) => {
    let state1 = 0, state2 = 0, ans = 0;

    for(let i = 0; i < nums.length; i++){
        ans = Math.max(state1 + nums[i], state2);
        state1 = state2;
        state2 = ans;
    }

    return ans;
};