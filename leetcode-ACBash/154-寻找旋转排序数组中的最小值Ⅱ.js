/***
 * @creater:ACBash
 * @create_time:22-3-28 14:17:13
 * @last_modify:ACBash
 * @modify_time:22-3-28 14:52:12
 * @line_count:18
 **/

 const findMin = (nums) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left < right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] < nums[right]){
            right = mid;
        }else if(nums[mid] > nums[right]){
            left = mid + 1;
        }else if(nums[mid] == nums[right]){
            right--;
        }
    }

    return nums[right];
};