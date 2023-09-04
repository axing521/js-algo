/***
 * @creater:ACBash
 * @create_time:22-9-27 18:42:6
 * @last_modify:ACBash
 * @modify_time:22-9-27 19:23:44
 * @line_count:41
 **/

const canPartitionKSubsets = (nums, k) => {
    const sum = nums.reduce((prev, cur) => prev + cur, 0);
    
    if(sum % k !== 0) return false;

    let per = sum / k;

    nums.sort((a, b) => a - b);

    const n = nums.length;

    if(nums[n - 1] > per) return false;

    let dp = new Array(1 << n).fill(false);
    let curSum = new Array(1 << n).fill(0);

    dp[0] = true;   //入口状态

    //当前状态
    for(let i = 0; i < 1 << n; i++){
        if(!dp[i]) continue;

        //决策
        for(let j = 0; j < n; j++){
            if(curSum[i] + nums[j] > per) break;

            //找到下一个大的数字
            if(((i >> j) & 1) == 0){
                let next = i | (1 << j);

                //转移状态
                if(!dp[next]){
                    curSum[next] = (curSum[i] + nums[j]) % per;
                    dp[next] = true;
                }
            }
        }
    }

    return dp[(1 << n) - 1];
};