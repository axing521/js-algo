/***
 * @creater:ACBash
 * @create_time:22-10-6 14:38:26
 * @last_modify:ACBash
 * @modify_time:22-10-6 15:10:9
 * @line_count:16
 **/

const jump = (nums) => {
    const len = nums.length;
    let ans = 0, furthest = 0, end = 0;

    //骑驴找马
    for(let i = 0 ; i < len - 1; i++){
        furthest = Math.max(furthest, i + nums[i]);

        if(i == end){
            ans++;
            end = furthest;
        }
    }

    return ans;
};