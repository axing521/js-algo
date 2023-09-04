/***
 * @creater:ACBash
 * @create_time:22-10-6 15:22:58
 * @last_modify:ACBash
 * @modify_time:22-10-6 15:22:58
 * @line_count:15
 **/

const canJump = (nums) => {
    const len = nums.length;
    let furthest = 0, end = 0;

    for(let i = 0; i < len - 1; i++){
        furthest = Math.max(furthest, i + nums[i]);
        
        if(i == end){
            if(furthest == end) return false;
            end = furthest;
        }
    }

    return true;
};