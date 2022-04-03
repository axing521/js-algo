/***
 * @creater:ACBash
 * @create_time:22-4-3 15:53:53
 * @last_modify:ACBash
 * @modify_time:22-4-3 15:53:54
 * @line_count:34
 **/

/* LC:找最大窗口，rsum=>花的，lsum=>挣的，存款=>k */
const longestOnes = (nums,k) => {
    const len = nums.length;
    let left = 0, lsum = 0, rsum = 0;
    let ans = 0;

    for(let right=0; right<len; right++){
        rsum += 1 - nums[right];
        while(rsum-lsum > k){
            lsum += 1 - nums[left];
            left++;
        }
        ans = Math.max(ans, right-left+1);
    }

    return ans;
};

const longestOnes = (nums,k) => {
    let ans = 0, slow = 0;

    for(let fast = 0; fast < nums.length; fast++){
        if(nums[fast] == 0) k--;

        while(k < 0){
            if(nums[slow] == 0) k++;
            slow++;
        }

        ans = Math.max(ans, fast - slow + 1);
    }

    return ans;
};