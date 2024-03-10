// 给定一个不含重复数字的数组nums, 返回其所有可能的全排列。
// 回溯，本质是暴力遍历，track记录某种全排列

const func1 = nums => {
    let ans = [];

    const backtrack = track => {
        if (track.length == nums.length) ans.push([...track]);

        for (let i = 0; i < nums.length; i++) {
            if (track.includes(nums[i])) continue;

            track.push(nums[i]);
            backtrack(track);
            track.pop();
        }
    };

    backtrack([]);

    return ans;
};
