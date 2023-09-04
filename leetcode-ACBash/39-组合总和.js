/***
 * @creater:ACBash
 * @create_time:22-9-18 10:57:35
 * @last_modify:ACBash
 * @modify_time:22-9-18 11:17:1
 * @line_count:24
 **/

//candidates = [2, 3, 6, 7], target = 7, ans = [[2, 2, 3], [7]];

//回溯

const combinationSum = (candidates, target) => {
    let ans = [];
    
    candidates.sort((a, b) => a - b);

    const backtrack = (track, remain, start) => {
        if(remain < 0) return;
        if(remain == 0) return ans.push([...track]);

        for(let i = start; i < candidates.length; i++){
            track.push(candidates[i]);
            backtrack(track, remain - candidates[i], i);
            track.pop();
        }
    };

    backtrack([], target, 0);

    return ans;
};