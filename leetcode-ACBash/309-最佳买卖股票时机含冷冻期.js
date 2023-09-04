/***
 * @creater:ACBash
 * @create_time:22-10-3 15:10:35
 * @last_modify:ACBash
 * @modify_time:22-10-3 15:10:35
 * @line_count:38
 **/

//记忆化递归
const maxProfit = (prices) => {
    const len = prices.length;

    //state: 0表示手上没有股票，-1表示手上没有股票，且在冷冻期，1表示手上有股票
    const recursive = (i, state) => {
        if(i == len - 1) return state == 1 ? prices[i] : 0;

        if(state == -1) return recursive(i + 1, 0);
        if(state == 0) return Math.max(recursive(i + 1, 0), recursive(i + 1, 1) - prices[i]);
        if(state == 1) return Math.max(recursive(i + 1, 1), recursive(i + 1, -1) + prices[i]);
    };

    return recursive(0, 0);
};

//DP
const maxProfit = (prices) => {
    if(prices.length == 1) return 0;

    const len = prices.length;

    let got = new Array(len).fill(0);
    let not = new Array(len).fill(0);
    
    got[0] = -prices[0];
    got[1] = Math.max(-prices[0], -prices[1]);

    not[0] = 0;
    not[1] = Math.max(0, -prices[0] + prices[1]);

    for(let i = 2; i < len; i++){
        got[i] = Math.max(got[i - 1], not[i - 2] - prices[i]);
        not[i] = Math.max(not[i - 1], got[i - 1] + prices[i]);
    }

    return Math.max(got[len - 1], not[len - 1]);
};