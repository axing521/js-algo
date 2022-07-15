/***
 * @creater:ACBash
 * @create_time:22-7-15 8:55:12
 * @last_modify:ACBash
 * @modify_time:22-7-15 8:55:36
 * @line_count:25
 **/

const search = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;
    
    while(left <= right){
        const mid = (left + right) >> 1;

        if(nums[left] == target) return left;
        
        if(nums[mid] > nums[left]){
            if(nums[left] < target && target < nums[mid]) right = mid - 1;
            else if(target == nums[mid]) right = mid;   //这个非常关键，不要漏了，表示能找到target，但是要找到第一个索引值，所以要收紧右区间
            else left = mid;    //left单点判断，区间宜松不宜紧,so 所有都可以 left/right = mid
        }else if(nums[mid] < nums[left]){
            if(nums[mid] < target && target < nums[right]) left = mid + 1;
            else if(target == nums[mid]) right = mid;   //这个非常关键，不要漏了，表示能找到target，但是要找到第一个索引值，所以要收紧右区间
            else right = mid;
        }else if(nums[mid] == nums[left]){
            left++;
        }
    }

    return -1;
};
