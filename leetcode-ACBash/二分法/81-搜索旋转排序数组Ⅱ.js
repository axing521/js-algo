/***
 * @creater:ACBash
 * @create_time:22-3-28 14:52:11
 * @last_modify:ACBash
 * @modify_time:22-3-28 16:11:49
 * @line_count:24
 **/

 const search = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] == target) return true;
        if(nums[left] == target) return true;
        if(nums[right] == target) return true;

        if(nums[left] < nums[mid]){
            if(nums[left] < target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        }else if(nums[left] > nums[mid]){
            if(nums[mid] < target && target < nums[right]) left = mid + 1;
            else right = mid - 1;
        }else if(nums[left] == nums[mid]){
            left++;
        }
    }

    return false;
};