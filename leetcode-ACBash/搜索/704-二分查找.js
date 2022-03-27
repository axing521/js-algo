/***
 * @creater:ACBash
 * @create_time:22-3-27 14:23:27
 * @last_modify:ACBash
 * @modify_time:22-3-27 14:31:50
 * @line_count:18
 **/

 const search = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else if(nums[mid] == target){
            return mid;
        }
    }

    return -1;
};