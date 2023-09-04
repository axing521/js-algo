/***
 * @creater:ACBash
 * @create_time:22-9-18 16:54:6
 * @last_modify:ACBash
 * @modify_time:22-10-9 22:52:23
 * @line_count:41
 **/

//回溯
const subsets = (nums) => {
    let ans = [];

    const backtrack = (track, start) => {
        if(track.length == nums.length) return ans.push([...track]);
        
        ans.push([...track]);

        for(let i = start; i < nums.length; i++){
            track.push(nums[i]);
            backtrack(track, i + 1);
            track.pop();
        }
    };

    backtrack([], 0);

    return ans;
};

//状压DP
const subsets = (nums) => {
    let ans = [];
    const n = nums.length;
    const stateSum = 1 << n;

    for(let curState = 0; curState < stateSum; curState++){
        let temp = [];

        for(let i = 0; (curState >> i) > 0; i++){
            if((curState >> i) & 1 == 1){
                temp.push(nums[i]);
            }
        }
        
        ans.push(temp);
    }

    return ans;
};