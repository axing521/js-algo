/***
 * @creater:ACBash
 * @create_time:22-10-10 17:28:43
 * @last_modify:ACBash
 * @modify_time:22-10-10 17:33:29
 * @line_count:22
 **/

const singleNumber = (nums) => {
    const n = nums.length;
    let xor = 0;

    for(const num of nums){
        xor ^= num;
    }

    let lowbit = xor & (-xor);
    let num1 = 0;
    let num2 = 0;

    for(const num of nums){
        if((num & lowbit) == 0){
            num1 ^= num;
        }else{
            num2 ^= num;
        }
    }

    return [num1, num2];
};