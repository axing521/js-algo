/***
 * @creater:ACBash
 * @create_time:21-10-18 20:5:22
 * @last_modify:ACBash
 * @modify_time:21-10-19 16:5:31
 * @line_count:47
 **/

/* 暴力法，超时 */
/* const reversePairs = (nums) => {
    let mergeArr = 0;
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] < nums[i]){
                mergeArr++;
            }
        }
    }
    return mergeArr;
}; */

/* 分而治之-归并排序的副产品，或许还能优化一下API？下次看看 */
const reversePairs = (nums) => {
    let ans = 0;
    
    const merge = (left, right) => {
        let i = 0, j = 0, mergeArr = [];
        while(i < left.length && j < right.length){
            if(left[i] > right[j]){
                ans += left.length - i;     //就是比*归并排序*多加了这一行
                mergeArr.push(right[j++]);
            }else{
                mergeArr.push(left[i++]);
            }
        }
        return mergeArr.concat(i<left.length ? left.slice(i) : right.slice(j));
    }

    const mergeSort = (nums) => {
        const {length} = nums;
        if(length > 1){
            const mid = length>>1;
            const left = mergeSort(nums.slice(0,mid));
            const right= mergeSort(nums.slice(mid));
            nums = merge(left, right);
        }
        return nums;
    }

    mergeSort(nums);

    return ans;
};

console.log(reversePairs([7,5,6,4]));