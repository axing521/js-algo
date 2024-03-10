// 两个按非递减顺序排列的整数数组nums1和nums2，合并两个数组使得返回同样按非递减顺序排列的数组。
// 三个尾指针，倒序遍历，依次座位

const func1 = (nums1, nums2) => {
    const m = nums1.length;
    const n = nums2.length;

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
