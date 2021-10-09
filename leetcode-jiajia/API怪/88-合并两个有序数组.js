/* 测试用例 */
/* console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
console.log(merge([1],1,[],0)); */

/* 这样调用API在VS上可行，在LC上不行... */
var merge = function(nums1, m, nums2, n) {
    
    nums1 = nums1.slice(0,m)
                 .concat(...nums2)
                 .sort((a,b)=>a-b);
    return nums1;
};

/* LC官方法一：API怪 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};

/* LC官方法二：双指针解法 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    while (p1 < m || p2 < n) {
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            cur = nums1[p1++];
        } else {
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];
    }
};

/* LC官方法三：逆双指针解法 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1, p2 = n - 1;
    let tail = m + n - 1;
    var cur;
    while (p1 >= 0 || p2 >= 0) {
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }
        nums1[tail--] = cur;
    }
};