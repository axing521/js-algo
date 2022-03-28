/***
 * @creater:ACBash
 * @create_time:22-3-27 19:20:19
 * @last_modify:ACBash
 * @modify_time:22-3-28 14:17:15
 * @line_count:19
 **/

/* 二分，不断收紧右区间 */
const findMin = (nums) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] < nums[right]){
            right = mid;
        }else if(nums[mid] > nums[right]){
            left = mid + 1;
        }else if(nums[mid] == nums[right]){
            left = mid + 1;
        }
    }

    return nums[right];
};