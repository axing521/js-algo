/***
 * @creater:ACBash
 * @create_time:22-9-18 23:30:24
 * @last_modify:ACBash
 * @modify_time:22-9-18 23:47:28
 * @line_count:22
 **/

//不能 包含重复的子集， 以及包含重复元素，这种情况怎么处理
const subsetsWithDup = (nums) => {
    let ans = [];

    nums.sort((a, b) => a - b);

    const backtrack = (track, start) => {
        if(track.length == nums.length) return ans.push([...track]);
        ans.push([...track]);

        for(let i = start; i < nums.length; i++){
            if(i > start && nums[i] == nums[i - 1]) continue;
            track.push(nums[i]);
            backtrack(track, i + 1);
            track.pop();
        }
    };

    backtrack([], 0);

    return ans;
};