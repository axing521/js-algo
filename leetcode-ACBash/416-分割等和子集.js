/***
 * @creater:ACBash
 * @create_time:22-10-3 20:25:25
 * @last_modify:ACBash
 * @modify_time:22-10-3 21:11:16
 * @line_count:40
 **/

const canPartition = (nums) => {
    let sum = nums.reduce((prev, cur) => prev + cur, 0);
    
    if(sum % 2) return false;
    else sum /= 2;

    let dp = Array.from({length: nums.length + 1}, () => new Array(sum + 1).fill(false));

    for(let i = 0; i < dp.length; i++){
        dp[i][0] = true;
    }

    for(let i = 1; i <= nums.length; i++){
        for(let j = 1; j <= sum; j++){
            dp[i][j] = j - nums[i - 1] >= 0 ? dp[i - 1][j] || dp[i - 1][j - nums[i - 1]] : dp[i - 1][j];
        }
    }

    return dp[nums.length][sum];
};

//滚动数组优化
const canPartition = (nums) => {
    let sum = nums.reduce((prev, cur) => prev + cur, 0);
    
    if(sum % 2) return false;
    else sum /= 2;

    let dp = new Array(sum + 1).fill(false);
    
    dp[0] = true;

    for(let i = 1; i <= nums.length; i++){
        for(let j = sum; j >= 1; j--){  //注意j遍历的顺序,如果从小到大，dp[j - nums[i - 1]]已经被更新，不是上一行的值
            dp[j] = j - nums[i - 1] >= 0 ? dp[j] || dp[j - nums[i - 1]] : dp[j];
        }
    }

    return dp[sum];
};