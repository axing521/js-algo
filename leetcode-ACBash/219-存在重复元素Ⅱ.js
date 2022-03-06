/***
 * @creater:ACBash
 * @create_time:22-3-6 17:17:33
 * @last_modify:ACBash
 * @modify_time:22-3-6 17:51:51
 * @line_count:17
 **/

 const containsNearbyDuplicate = (nums, k) => {
    let map = {};

    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        
        if(map[num] == undefined){
            map[num] = i;
            continue;
        }
        
        if(i - map[num] <= k) return true;
        else map[num] = i;
    }

    return false;
};