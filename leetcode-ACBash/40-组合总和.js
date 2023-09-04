/***
 * @creater:ACBash
 * @create_time:22-9-18 11:16:35
 * @last_modify:ACBash
 * @modify_time:22-9-18 11:45:42
 * @line_count:22
 **/

 const combinationSum2 = (candidates, target) => {
    let ans = [];

    candidates.sort((a, b) => a - b);

    const backtrack = (track, remain, start) => {
        if(remain < 0) return;
        if(remain == 0) return ans.push([...track]);

        for(let i = start; i < candidates.length; i++){
            if(i > start && candidates[i] == candidates[i - 1]) continue;
            
            track.push(candidates[i]);
            backtrack(track, remain - candidates[i], i + 1);
            track.pop();
        }
    };

    backtrack([], target, 0);

    return ans;
};