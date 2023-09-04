/***
 * @creater:ACBash
 * @create_time:22-9-18 15:21:35
 * @last_modify:ACBash
 * @modify_time:22-9-18 15:34:29
 * @line_count:27
 **/

 const permuteUnique = (nums) => {
    const len = nums.length;

    let ans = [];
    let visited = new Array(len).fill(false);

    nums.sort((a, b) => a - b);

    const backtrack = (track, visited) => {
        if(track.length == len) return ans.push([...track]);
        
        for(let i = 0; i < len; i++){
            if(visited[i]) continue;    //避免重复选取
            if(i > 0 && nums[i] == nums[i - 1] && visited[i - 1]) continue; //故意continue，以将这种情况排除，以致造成在有重复数字的情况下，一定是倒序选取的唯一情况

            track.push(nums[i]);
            visited[i] = true;
            backtrack(track, visited);
            track.pop();
            visited[i] = false;
        }
    };

    backtrack([], visited);

    return ans;
};