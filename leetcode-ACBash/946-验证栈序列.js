/***
 * @creater:ACBash
 * @create_time:21-10-13 19:40:26
 * @last_modify:ACBash
 * @modify_time:21-10-13 19:46:11
 * @line_count:33
 **/

/* 调测用例 */
/* console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1])); */

/* 自己写的：双指针+单栈 */
const validateStackSequences = (pushed,poped) => {
    let stack0 = [];
    let [i,j] = [0,0];
    while(i<pushed.length || j<poped.length){
        if(stack0[stack0.length-1]!==poped[j] && i<pushed.length){
            stack0.push(pushed[i++]);
        }else if(stack0[stack0.length-1]===poped[j] && j<poped.length){
            stack0.pop();
            j++;
        }else{
            return false;
        }
    }
    return true;
};

/* LC:模拟栈 */
const validateStackSequences = (pushed,poped) => {
    let stack0 = [];
    let popedIndex = 0;
    for(let i=0; i<pushed.length; i++){
        stack0.push(pushed[i]);
        while(stack0.length && stack0[stack0.length-1]===poped[popedIndex]){
            stack0.pop();
            popedIndex++;
        }
    }
    return !stack0.length;
};