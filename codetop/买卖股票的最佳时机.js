// 本质是求一个数组中两个数字差值的最大值
// 一次遍历数组，用一个min实时维护数组的最小值，如果增项那么更新维护profit差值

const func1 = prices => {
    let min = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit = Math.max(profit, prices[i] - min);
        } else {
            min = Math.min(min, prices[i]);
        }
    }

    return profit;
};
