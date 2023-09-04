/***
 * @creater:ACBash
 * @create_time:22-10-11 17:42:56
 * @last_modify:ACBash
 * @modify_time:22-10-11 17:46:17
 * @line_count:11
 **/

const hammingWeight = (n) => {
    let ans = 0;

    for(let i = 0; i <= 31; i++){
        let bit = 1 << i;

        if(n & bit) ans++;
    }

    return ans;
};