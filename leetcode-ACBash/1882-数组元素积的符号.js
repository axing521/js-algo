/***
 * @creater:ACBash
 * @create_time:22-10-27 11:2:22
 * @last_modify:ACBash
 * @modify_time:22-10-27 11:3:41
 * @line_count:11
 **/

const arraySign = (nums) => {
    let ans = 1;

    for(const num of nums){
        if(num > 0) continue;
        else if(num < 0) ans *= -1;
        else return 0;
    }

    return ans;
};