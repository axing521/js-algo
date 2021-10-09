/* 调测用例 */
/* console.log(missingNumber([0])); */

/* 1.迭代查找 */
const missingNumber = (nums) => {
    for(let i=0; i<nums.length; i++){
        if(i!==nums[i]) return i;
    }
    return nums.length;
}
/* console.log(missingNumber([0])); */

/* 2.二分查找 */
const missingNumber = (nums) => {
    let low=0, high=nums.length-1;
    while(low<=high){
        let mid = (low+high) >> 1;
        if(mid===nums[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return low;
}