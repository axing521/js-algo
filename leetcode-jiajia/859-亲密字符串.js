/* 调测用例 */
/* console.log(buddyStrings("abcaa","abcbb")); */
/* [s[flag[0]],s[flag[1]]] = [s[flag[1]],s[flag[0]]]; */

/* 分类讨论 */
const buddyStrings = (s,goal) => {
    if(s.length!==goal.length) return false;
    if(s===goal){
        for(let i=0; i<s.length-1; i++){
            for(let j=i+1;j<s.length; j++){
                if(s[i]===s[j]) return true;
            }
        }
        return false;
    }
    let flag=[];
    for(let i=0; i<s.length; i++){
        if(s[i]!==goal[i]){
            flag.push(i);
            if(flag.length>2) return false;
        }
    }
    if(flag.length===1) return false;
    if(s[flag[0]]===goal[flag[1]] && s[flag[1]]===goal[flag[0]]) return true;
    else return false;
};

