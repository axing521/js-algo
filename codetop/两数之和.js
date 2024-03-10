// 一个整数数组nums和一个整数值target，在nums中找出 和为target 的两个整数，返回它们的数组下标
// 用一个map结构记录缺省值以及索引，在遇到缺省值时直接记录ans

const func1 = (nums, target) => {
    let map = new Map(),
        ans = [];

    nums.forEach((num, index) => {
        if (map.has(num)) {
            ans = [map.get(num), index];
        }

        map.set(target - num, index);
    });

    return ans;
};
