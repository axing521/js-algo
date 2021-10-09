/* 调测用例 */
/* console.log(thirdMax([3,2,1]));
console.log(thirdMax([2,2,3,1])); */

/* 1.set去重+sort排序 */
const thirdMax = (nums) => {
    let sortArr = [...new Set(nums)].sort((a,b) => b-a);
    /* console.log(sortArr); */
    return sortArr.length>2 ? sortArr[2] : sortArr[0];
};

/* 2.解构赋值擂台轮换 */
const thirdMax = (nums) => {
    let min, mid, max;
    for(let i=0; i<nums.length; i++){
        if(max===nums[i] || min===nums[i] || mid===nums[i]){
            continue;
        }
        if(nums[i]>max || max===undefined){
            [min,mid,max] = [mid,max,nums[i]];
        }else if(nums[i]>mid || mid===undefined){
            [min,mid] = [mid,nums[i]];
        }else if(nums[i]>min || min===undefined){
            min=nums[i];
        }
    }
    if(min===undefined || mid===undefined) return max;
    else return min;
};

/* 3.逐渐去重+缓存数组 */
const thirdMax = (nums) => {
    const max1 = Math.max(...nums);
    let cache1 = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==max1){
            cache1.push(nums[i]);
        }
    }
    if(cache1.length===0) return max1;
    const max2 = Math.max(...cache1);
    let cache2 = [];
    for(let i=0; i<cache1.length; i++){
        if(cache1[i]!==max2){
            cache2.push(cache1[i]);
        }
    }
    if(cache2.length===0) return max1;
    const max3 = Math.max(...cache2);
    return max3;
};