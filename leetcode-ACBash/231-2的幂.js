/***
 * @creater:ACBash
 * @create_time:22-10-9 21:41:6
 * @last_modify:ACBash
 * @modify_time:22-10-9 21:41:19
 * @line_count:21
 **/

const isPowerOfTwo = (n) => {
    if(n < 0) return false;

    for(let i = 0; i <= 30; i++){
        if((n ^ (1 << i)) == 0) return true;
    }

    return false;
};

const isPowerOfTwo = (n) => {
    return n > 0 && ((n & (n - 1))) == 0;
};

const isPowerOfTwo = (n) => {
    return n > 0 && (n & -n) == n;
};

const isPowerOfTwo = (n) => {
    return n > 0 && (2 ** 30) % n == 0;
};