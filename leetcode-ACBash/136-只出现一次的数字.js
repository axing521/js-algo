/***
 * @creater:ACBash
 * @create_time:22-10-10 13:20:20
 * @last_modify:ACBash
 * @modify_time:22-10-10 13:23:29
 * @line_count:9
 **/

const singleNumber = (nums) => {
    let xor = 0;

    for(const num of nums){
        xor ^= num;
    }

    return xor;
};