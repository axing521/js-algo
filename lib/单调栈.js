/***
 * @creater:ACBash
 * @create_time:21-10-13 20:12:4
 * @last_modify:ACBash
 * @modify_time:21-10-13 21:59:8
 * @line_count:16
 **/

 var monostoneStack = function (T) {
    let stack = [];         //单调递减元素的索引栈，全是摆烂哥的索引
    let result = [];        //记录当前索引后下一个比当前元素大的元素索引差值
    for (let i = 0; i < T.length; i++) {
      result[i] = 0;
      //如果单调递增，进入循环
      while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
        let peek = stack.pop();
        result[peek] = i - peek;
      }
      stack.push(i);
    }
    return result;
};

console.log(monostoneStack([1,3,4,5,2,9,6]));