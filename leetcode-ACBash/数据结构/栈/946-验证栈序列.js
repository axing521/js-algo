/***
 * @creater:ACBash
 * @create_time:21-10-13 19:47:28
 * @last_modify:ACBash
 * @modify_time:21-10-13 19:47:28
 * @line_count:27
 **/

/* 调测用例 */
/* console.log(validateStackSequences([1,2,3,4,5],[4,5,3,2,1])); */

/* 自己写的：双指针+单栈 */
const validateStackSequences = (pushed,poped) => {
    let stack0 = [], j=0, i=0;
    while(i<pushed.length || j<poped.length){
        if(i<pushed.length && stack0[stack0.length-1]!==poped[j]){
            stack0.push(pushed[i]); i++;
            /* i = i<pushed.length ? i+1 : i; */
        }else if(j<pushed.length && stack0[stack0.length-1]===poped[j]){
            stack0.pop(); j++;
            /* j = j<pushed.length ? j+1 : j; */
        }else{
            return false;
        }
    }
    /* console.log(stack0);
    return stack0.length ? false : true; */
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