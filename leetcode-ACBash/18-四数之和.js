/***
 * @creater:ACBash
 * @create_time:22-5-24 16:30:9
 * @last_modify:ACBash
 * @modify_time:22-5-24 16:56:18
 * @line_count:37
 **/

 const fourSum = (nums, target) => {
    const len = nums.length;
    let ans = [];

    nums.sort((a, b) => a - b);

    for(let d = len - 1; d > 2; d--){
        if(d < len - 1 && nums[d] == nums[d + 1]) continue;

        for(let c = d - 1; c > 1; c--){
            if(c < d - 1 && nums[c] == nums[c + 1]) continue;

            let a = 0, b = c - 1;

            while(a < b){
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                
                if(sum == target){
                    ans.push([nums[a], nums[b], nums[c], nums[d]]);

                    while(a < b && nums[a] == nums[a + 1]) a++;
                    while(a < b && nums[b] == nums[b - 1]) b--;

                    a++;
                    b--;

                }else if(sum > target){
                    b--;
                }else if(sum < target){
                    a++;
                }
            }
        }
    }

    return ans;
};