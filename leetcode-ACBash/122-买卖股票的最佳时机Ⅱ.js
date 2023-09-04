/***
 * @creater:ACBash
 * @create_time:22-10-3 19:28:6
 * @last_modify:ACBash
 * @modify_time:22-10-3 19:33:40
 * @line_count:21
 **/

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
        got[i] = Math.max(got[i - 1], not[i - 1] - prices[i]);
        not[i] = Math.max(not[i - 1], got[i - 1] + prices[i]);
    }

    return Math.max(got[len - 1], not[len - 1]);
};