/***
 * @creater:ACBash
 * @create_time:22-10-11 16:44:59
 * @last_modify:ACBash
 * @modify_time:22-10-11 17:40:22
 * @line_count:13
 **/

//js有符号，负数会比较操蛋
const reverseBits = (n) => {
    let ans = 0;
    
    for(let i = 0; i < 32; i++){
        let bit = 1 << i;
        let reverseBit = 1 << (31 - i);

        if(n & bit) ans = (ans | reverseBit) >>> 0; //>>>0能将其转化成无符号整数
    }

    return ans;
};