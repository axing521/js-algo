/***
 * @creater:ACBash
 * @create_time:21-11-7 19:43:13
 * @last_modify:ACBash
 * @modify_time:21-11-7 21:3:50
 * @line_count:38
 **/

/* 暴力法，800ms */
const containsNearbyAlmostDuplicate = (nums, k, t) => {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<=i+k; j++){
            if(Math.abs(nums[i] - nums[j]) <= t){
                return true;
            }
        }
    }

    return false;
};

/* LC:桶 */
const getID = (x, w) => {
    return x < 0 ? Math.floor((x + 1) / w) - 1 : Math.floor(x / w);
};

const containsNearbyAlmostDuplicate = (nums, k, t) => {
    const map = {}, len = nums.length;

    for(let i = 0; i < len; i++){
        const x = nums[i];
        const id = getID(x, t + 1);

        if(map[id] != undefined) return true;
        
        if(map[id - 1] != undefined && Math.abs(x - map[id - 1]) <= t) return true;

        if(map[id + 1] != undefined && Math.abs(x - map[id + 1]) <= t) return true;

        map[id] = x;

        if(i >= k) map[getID(nums[i - k], t + 1)] = undefined;
    }

    return false;
};