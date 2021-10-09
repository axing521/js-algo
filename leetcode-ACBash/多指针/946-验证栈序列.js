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