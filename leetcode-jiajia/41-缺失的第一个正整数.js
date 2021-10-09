/* 调测用例 */
/* console.log(firstMissingPositive([1,2,3,4,5])); */

/* 按序号站队，原地排序 */
/* 时间O(n),空间O(1) */
/* x∈[1,n+1] */
const firstMissingPositive = (nums) => {
    for(let i=0; i<nums.length; i++){
        while(
            nums[nums[i]-1]!==nums[i] &&
            nums[i]>=1 &&
            nums[i]<=nums.length
        ){
            //下面这个顺序的解构赋值在LC上行不通，应该是编译器的问题，换个顺序就OK
            [nums[i],nums[nums[i]-1]] = [nums[nums[i]-1],nums[i]];
        }
    }
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== i+1){
            return i+1;
        }
    }
    return nums.length+1;
}

/* 使用set */
/* 时间空间均为O(n) */
const firstMissingPositive = (nums) => {
    let set0 = new Set(nums);
    for(let i=1; i<=set0.size; i++){
        if(!(set0.has(i))){
            return i;
        }
    }
    return set0.size + 1;
}

/* 时间O(n^2)解法,LC上会超时 */
/* 一趟：有没有1？有？再来一趟，有没有2？。。。没有？跳出返回 */
const firstMissingPositive = (nums) => {
    let i=0, temp=1;
    while(i<nums.length){
        if(nums[i]===temp){
            temp++;
            i=0;
        }else{
            i++;
        }
    }
    return temp;
}