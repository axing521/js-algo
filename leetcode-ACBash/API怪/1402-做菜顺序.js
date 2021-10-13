/***
 * @creater:ACBash
 * @create_time:21-10-13 13:49:42
 * @last_modify:ACBash
 * @modify_time:21-10-13 15:48:50
 * @line_count:58
 **/

/* 看到hard不要怕，暴力干出来就完了，68ms,O(n^2) */
const maxSatisfaction = (satis) => {
    const sortedArr = satis.sort((a,b) => a-b);
    let pre = 0;

    let ans = 0;
    for(let i=0; i<sortedArr.length; i++){
        pre = 0;
        for(let j=i; j<sortedArr.length; j++){         
            pre += sortedArr[j] * (j-i+1);
            ans = Math.max(ans, pre);
        }
    }

    return ans;
};

/* LC:贪心+API怪，咱们学js的还是得多熟悉api，底层思维和顶层思维都要抓 */
var maxSatisfaction = function(satisfaction) {

    if (satisfaction.every(x => x < 0)) {
        return 0;
    }

    const s = satisfaction.sort((x,y) => (x-y));

    let sum = 0;
    let prevMax = -Infinity;

    while (s.length > 0) {
        arr = s.map((val, index) => val * (index + 1));
        sum = arr.reduce((prev, next) => (prev + next));
        if (sum > prevMax) {
            prevMax = sum;
        } else {
            break;
        }
        s.shift();
    }

    return prevMax;

};

/* LC：这个贪心，反向递归，很秀啊 */
var maxSatisfaction = function(satisfaction) {
    satisfaction.sort((a, b) => a - b) // 排序服务于贪心，从而直接可以反向递归
    let max = 0, sum = 0, p = satisfaction.length - 1
    while (p >= 0) {
      for (let i = p; i < satisfaction.length; i++) sum += satisfaction[i]
      if (max < sum) max = sum
      else return max
      p--
    }
    return max
};

console.log(maxSatisfaction([-1,-8,0,5,-9]));