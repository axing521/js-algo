/***
 * @creater:ACBash
 * @create_time:22-3-28 14:17:13
 * @last_modify:ACBash
 * @modify_time:22-7-25 10:50:12
 * @line_count:42
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

const findMin = (nums) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = (left + right) >> 1;
        if(nums[left] < nums[right]){
            return nums[left];
        }else if(nums[left] > nums[right]){
            if(nums[mid] > nums[left]){
                left = mid + 1;
            }else if(nums[mid] < nums[left]){
                right = mid;
            }else if(nums[mid] == nums[left]){
                left = mid + 1;
            }
        }else if(nums[left] == nums[right]){
            left++;
        }
    }

    return nums[right];
};