/***
 * @creater:ACBash
 * @create_time:22-10-4 14:50:47
 * @last_modify:ACBash
 * @modify_time:22-10-5 0:20:36
 * @line_count:25
 **/

const merge = (arr1, arr2) => {
    let i = 0, j = 0;
    let ans = [];

    while(i < arr1.length && j < arr2.length){
        ans.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
    }

    return ans.concat(i < arr1.length ? arr1.slice(i) : arr2.slice(j));
};

const mergeSort = (arr) => {
    const len = arr.length;

    if(len > 1){
        const mid = len >> 1;

        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid, len));

        arr = merge(left, right);
    }

    return arr
};