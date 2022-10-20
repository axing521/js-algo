/***
 * @creater:ACBash
 * @create_time:22-10-20 10:59:12
 * @last_modify:ACBash
 * @modify_time:22-10-20 10:59:25
 * @line_count:19
 **/

//找规律，位置k - 1的二进制数码中1的个数是奇数那么结果就是1，否则是0
const kthGrammar = (n, k) => {
    k--;
    let ans = 0;
    while(k > 0){
        k &= k - 1; //这个技巧经常用，用于清除低位1
        ans ^= 1;
    }
    return ans;
};

//找规律，镜像翻转
const kthGrammar = (n, k) => {
    if(k == 1) return 0;

    if(k > (1 << (n - 2))) return 1 ^ kthGrammar(n - 1, k - (1 << (n - 2)));

    return kthGrammar(n - 1, k);
};