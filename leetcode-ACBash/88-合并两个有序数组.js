/***
 * @creater:ACBash
 * @create_time:22-11-23 17:20:18
 * @last_modify:ACBash
 * @modify_time:22-11-23 17:21:57
 * @line_count:76
 **/

/* 测试用例 */
/* console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
console.log(merge([1],1,[],0)); */

/* 这样调用API在VS上可行，在LC上不行... */
var merge = function (nums1, m, nums2, n) {

    nums1 = nums1.slice(0, m)
        .concat(...nums2)
        .sort((a, b) => a - b);
    return nums1;
};

/* 1.API */
const merge = (nums1, m, nums2, n) => {
    nums1.splice(m, n, ...nums2);
    nums1 = nums1.sort((a, b) => a - b)
    return nums1;
};

/* 2.双指针 */
const merge = (nums1, m, nums2, n) => {
    let [p1, p2] = [0, 0];
    const sorted = [];
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            sorted.push(nums2[p2++]);
        } else if (p2 === n) {
            sorted.push(nums1[p1++]);
        } else if (nums1[p1] > nums2[p2]) {
            sorted.push(nums2[p2++]);
        } else {
            sorted.push(nums1[p1++]);
        }
    }
    for (let i = 0; i < sorted.length; i++) {
        nums1[i] = sorted[i];
    }
    return nums1;
};

const merge = (nums1, m, nums2, n) => {
    let i = 0, j = 0;
    let sorted = [];

    while (i < m && j < n) {
        if (nums1[i] > nums2[j]) {
            sorted.push(nums2[j++]);
        } else {
            sorted.push(nums1[i++]);
        }
    }

    sorted = sorted.concat(i == m ? nums2.slice(j) : nums1.slice(i, m));

    for (let i = 0; i < sorted.length && i < nums1.length; i++) {
        nums1[i] = sorted[i];
    }
}

/* 3.逆双指针 */
const merge = (nums1, m, nums2, n) => {
    let [p1, p2, tail] = [m - 1, n - 1, m + n - 1];
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            nums1[tail--] = nums2[p2--];
        } else if (p2 === -1) {
            nums1[tail--] = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            nums1[tail--] = nums1[p1--];
        } else {
            nums1[tail--] = nums2[p2--];
        }
    }
    return nums1;
};