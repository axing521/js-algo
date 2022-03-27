/***
 * @creater:ACBash
 * @create_time:22-3-27 17:9:16
 * @last_modify:ACBash
 * @modify_time:22-3-27 19:0:45
 * @line_count:64
 **/

/* 矩阵扁平化为数组，重新回到熟悉的二分场景 */
const searchMatrix = (matrix, target) => {
    let nums = [];

    for(const row of matrix){
        nums.push(...row);
    }

    let left = 0, right = nums.length - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else if(nums[mid] == target){
            return true;
        }
    }

    return false;
};

/* 不对矩阵做结构处理，从行来一次二分，找到能够进行判断的行，在这个行里再来一次二分，其中注意边界溢出情况 */
const searchMatrix = (matrix, target) => {
    const m = matrix.length, n = matrix[0].length;
    let left = 0, right = m - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(matrix[mid][0] > target){
            right = mid - 1;
        }else if(matrix[mid][0] < target){
            left = mid + 1;
        }else if(matrix[mid][0] == target){
            return true;
        }
    }

    if(left < 1) return false;
    
    const nums = matrix[left - 1];
    
    left = 0, right = n - 1;

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(nums[mid] > target){
            right = mid - 1;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else if(nums[mid] == target){
            return true;
        }
    }

    return false;
};

console.log(searchMatrix([[1]], 0));