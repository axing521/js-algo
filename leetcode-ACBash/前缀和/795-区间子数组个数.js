/***
 * @creater:ACBash
 * @create_time:21-10-10 14:37:3
 * @last_modify:ACBash
 * @modify_time:21-10-10 14:56:28
 * @line_count:23
 **/

/* 前缀和，<=R的情况减去<=L的情况 */
const atMostK = (nums,k) => {
    let ans = 0;
    let pre = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] <= k){
            pre++;
        }else{
            pre = 0;
        }

        ans += pre;
    }

    return ans;
}

const numSubarrayBoundedMax = (nums,left,right) => {
    return atMostK(nums,right) - atMostK(nums,left-1);
};

console.log(numSubarrayBoundedMax([2,1,4,3],2,3));