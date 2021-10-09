/* 调测用例 */
/* console.log(thirdMax([3,2,1]));
console.log(thirdMax([2,2,3,1])); */

/* 法一：逐渐去重+缓存数组 */
var thirdMax = function(nums) {
    let max1 = Math.max(...nums);
    let cache1 = [];
    for(let i=0; i<nums.length; i++){
        if(nums[i]<max1){
            cache1.push(nums[i]);
        }
    }
    if(cache1.length==0) return max1;
    let max2 = Math.max(...cache1);
    let cache2 =[];
    for(let i=0; i<cache1.length; i++){
        if(cache1[i]<max2){
            cache2.push(cache1[i]);
        }
    }
    if(cache2.length==0) return max1;
    let max3 = Math.max(...cache2);
    return max3;
};

/* 法二：解构赋值+三人擂台轮换 */
var thirdMax = function (nums) {
    var max, mid, min;
    for (let i = 0; i < nums.length; i++) {
        var number = nums[i];
        if (number === max || number === mid || number === mid) {
            continue;
        }
        if (max === undefined || number > max) {
            //exchange
            [min, mid, max] = [mid, max, number];
        } else if (mid === undefined || number > mid) {
            [min, mid] = [mid, number];
        } else if (min === undefined || number > min) {
            min = number;
        }
    }

    if (mid === undefined || min === undefined) {
        return max;
    }

    return min;
};

/* 法三：使用Set去重排序数组 */
var thirdMax = function(nums) {
    /* if(nums.length<3) return Math.max(...nums) */
    let a = [...new Set(nums)].sort((a,b)=>a-b)
    return a.length<3?Math.max(...a):a[a.length-3]
};