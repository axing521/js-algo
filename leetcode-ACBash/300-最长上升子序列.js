/***
 * @creater:ACBash
 * @create_time:22-7-26 11:12:26
 * @last_modify:ACBash
 * @modify_time:22-8-16 15:34:35
 * @line_count:50
 **/

const lengthOfLIS = (nums) => {
    let dp = [];
    
    for(const num of nums){
        if(dp.length == 0 || dp[dp.length - 1] < num){
            dp.push(num);
        }else{
            let left = 0, right = dp.length - 1;

            let loc = right;

            while(left <= right){
                const mid = (left + right) >> 1;

                if(dp[mid] >= num){
                    loc = mid;
                    right = mid - 1;
                }else{
                    left = mid + 1;
                }
            }

            dp[loc] = num;
        }
    }
    
    return dp.length;
};

//[10,9,2,5,3,7,101,18]
//4

console.log(lengthOfLIS([10,9,2,5,3,7,101,18,6]))

//dp;

const lengthOfLIS = (nums) => {
    const len = nums.length;
    let dp = new Array(len).fill(1);

    for(let i = 0; i < len; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};