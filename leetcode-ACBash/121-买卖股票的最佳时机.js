/***
 * @creater:ACBash
 * @create_time:22-10-3 15:29:42
 * @last_modify:ACBash
 * @modify_time:22-11-22 15:45:48
 * @line_count:15
 **/

const maxProfit = (prices) => {
    let min = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            profit = Math.max(profit, prices[i] - min);
        }else{
            min = Math.min(min, prices[i]);
        }
    }

    return profit;
};
