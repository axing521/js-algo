/* 调测用例 */
/* console.log(missingNumber([0])); */

/* 迭代查找 */
var missingNumber = function(nums) {
    for(let i=0; i<nums.length+1; i++){
        if(nums[i]!==i){
            return i;
        }
    }
};

/* 二分查找 */
const missingNumber = nums => {
    let [low, high] = [0, nums.length - 1];
    while (low < high) {
        const mid = (low + high) >> 1;
        if (nums[mid] === mid) {
            // 左半边是完整的
            low = mid + 1;
        } else {
            // 左半边不完整
            high = mid - 1;
        }
    }
    return low;
};