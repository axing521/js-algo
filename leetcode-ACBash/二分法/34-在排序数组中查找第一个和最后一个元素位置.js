/***
 * @creater:ACBash
 * @create_time:22-3-27 14:31:48
 * @last_modify:ACBash
 * @modify_time:22-3-27 14:41:59
 * @line_count:38
 **/

/* 关于二分的细节，可以参考LC的收藏夹 */
const searchRange = (nums, target) => {
    const len = nums.length;
    let ans = [-1, -1];
    let left = 0, right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else if(nums[mid] == target){
            right = mid - 1;
        }
    }

    ans[0] = nums[left] == target ? left : -1;
    
    left = 0, right = len - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else if(nums[mid] == target){
            left = mid + 1;
        }
    }

    ans[1] = nums[right] == target ? right : -1;

    return ans;
};