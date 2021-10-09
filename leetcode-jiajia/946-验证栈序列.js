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