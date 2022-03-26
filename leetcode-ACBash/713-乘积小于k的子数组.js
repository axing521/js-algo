/***
 * @creater:ACBash
 * @create_time:22-3-26 14:39:17
 * @last_modify:ACBash
 * @modify_time:22-3-26 15:37:32
 * @line_count:16
 **/

const numSubarrayProductLessThanK = (nums, k) => {
    const len = nums.length;
    let left = 0, ans = 0, product = 1;
    
    for(let right = 0; right < len; right++){
        product *= nums[right];

        while(left <= right && product >= k){
            product /= nums[left++];
        }

        ans += left <= right ? right - left + 1 : 0;
    }

    return ans;
};