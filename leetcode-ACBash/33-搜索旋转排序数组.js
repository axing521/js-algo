/***
 * @creater:ACBash
 * @create_time:22-3-26 15:57:7
 * @last_modify:ACBash
 * @modify_time:22-11-20 9:13:18
 * @line_count:106
 **/

/* 暴力 */
const search = (nums, target) => {
    return nums.indexOf(target);
};

/* 二分 */
const search = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = (left + right) >> 1;

        if(nums[mid] == target) return mid;

        if(nums[left] < nums[mid]){
            if(nums[left] <= target && target <= nums[mid]) right = mid - 1;
            else left = mid + 1;
        }else{
            if(nums[mid] <= target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }

    return nums[left + 1] == target ? left + 1 : -1;
};

const search = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = (left + right) >> 1;

        if(nums[mid] == target) return mid;

        if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]) right = mid - 1;
            else left = mid + 1;
        }else{
            if(nums[mid] <= target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }

    return -1;
};

const search = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] == target) return mid;
        if(nums[left] == target) return left;
        if(nums[right] == target) return right;
        
        if(nums[left] < nums[mid]){
            if(nums[left] < target && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else{
            if(nums[mid] < target && target < nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }

    return -1;
};

const search = (nums, target) => {
    const n = nums.length;
    let left = 0, right = n - 1;

    while(left <= right){
        const mid = (left + right) >> 1;
        if(nums[mid] == target) return mid;
        if(nums[left] == target) return left;
        if(nums[right] == target) return right;

        if(nums[left] < nums[mid]){
            if(nums[left] < target && target < nums[mid]){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }else if(nums[left] > nums[mid]){
            if(nums[mid] < target && target < nums[right]){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }else if(nums[left] == nums[mid]){
            left++;
        }
    }

    return -1;
};