/***
 * @creater:ACBash
 * @create_time:22-10-9 22:5:57
 * @last_modify:ACBash
 * @modify_time:22-10-9 22:5:59
 * @line_count:26
 **/

//数学技巧
const missingNumber = (nums) => {
    const n = nums.length;
    const total = n * (n + 1) / 2;
    const sum = nums.reduce((prev, cur) => prev + cur, 0);

    return total - sum;
};

//位运算
const missingNumber = (nums) => {
    let xor = 0;

    for(const num of nums){
        xor ^= num;
    }

    for(let i = 0; i <= nums.length; i++){
        xor ^= i;
    }

    return xor;
};

//哈希表
//排序用索引对比