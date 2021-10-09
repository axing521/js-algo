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