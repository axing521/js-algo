/***
 * @creater:ACBash
 * @create_time:22-10-13 16:8:23
 * @last_modify:ACBash
 * @modify_time:22-10-13 16:8:28
 * @line_count:25
 **/

//考虑到数组长度为n，而且数组元素位于区间[0, n-1]且不重复，那么数组排好序后，每个值和下标恰好是相等的；所以，从左到右遍历数组，并且分别对值和下标累加求和，只要两个和相等，就切出一个块。
const maxChunksToSorted = (arr) => {
    let ans = 0, vSum = 0, iSum = 0;

    for(let i = 0; i < arr.length; i++){
        vSum += arr[i];
        iSum += i;

        if(vSum == iSum) ans++;
    }

    return ans;
};

//LC
var maxChunksToSorted = function(arr) {
    let m = 0, res = 0;
    for (let i = 0; i < arr.length; i++) {
        m = Math.max(m, arr[i]);
        if (m === i) {
            res++;
        }
    }
    return res;
};