/***
 * @creater:ACBash
 * @create_time:22-1-11 21:9:47
 * @last_modify:ACBash
 * @modify_time:22-1-11 21:47:32
 * @line_count:32
 **/

/* 递归，秒了 */
const fib = (n) => {
    if(n == 1 || n == 0) return n;

    return fib(n - 1) + fib(n - 2);
};

/* DP，也可以说是迭代 */
const fib = (n) => {
    if(n < 2) return n;

    let p = 0, q = 0, r = 1;

    for(let i = 2; i <= n; i++){
        p = q;
        q = r;
        r = p + q;
    }

    return r;
};

/* 特征方程通项公式 */
const fib = (n) => {
    const sqrt5 = Math.sqrt(5);
    const fibN = ((1 + sqrt5) / 2) ** n - ((1 - sqrt5) / 2) ** n;

    return Math.round(fibN / sqrt5);
};

/* 矩阵快速幂，感觉没必要，属于是简单题复杂化了，纯纯装逼用的 */
