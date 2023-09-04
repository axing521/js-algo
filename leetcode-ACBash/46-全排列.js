/***
 * @creater:ACBash
 * @create_time:22-9-18 15:40:3
 * @last_modify:ACBash
 * @modify_time:22-9-18 15:42:14
 * @line_count:19
 **/

const permute = (nums) => {
    let ans = [];

    const backtrack = (track) => {
        if(track.length == nums.length) ans.push([...track]);
        
        for(let i = 0; i < nums.length; i++){
            if(track.includes(nums[i])) continue;
            
            track.push(nums[i]);
            backtrack(track);
            track.pop();
        }
    };

    backtrack([]);

    return ans;
};