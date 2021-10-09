/* 1.eval */
const calculate = (s) => {
    return eval(s);
}

/* 2.双栈 */
const calculate = (s) => {
    let numStack = [];
    let opStack = [];
    let sign = 1;
    let ans = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]===" ") continue;
        if(s[i]==="+" || s[i]==="-") sign = s[i]==="+" ? 1 : -1;
        else if(!isNaN(s[i])){
            let num = parseInt(s[i]);
            while(!isNaN(s[i+1]) && i<s.length-1 && s[i+1]!==" "){
                num = num*10 + parseInt(s[++i]);
            }
            ans += sign*num;
        }else if(s[i]==="("){
            numStack.push(ans);
            opStack.push(sign);
            ans = 0;
            sign = 1;
        }else{
            ans = numStack.pop() + opStack.pop()*ans;
        }
    }
    return ans;
}

/* 3.单栈 */
const calculate = (s) => {
    let opStack = [1];
    let sign = 1;
    let ans = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]===" ") continue;
        if(s[i]==="+" || s[i]==="-") sign = s[i]==="+" ? opStack[opStack.length-1] : -opStack[opStack.length-1];
        else if(s[i]==="("){
            opStack.push(sign);
        }else if(s[i]===")"){
            opStack.pop();
        }else{
            let num = 0;
            while(i<s.length && !isNaN(s[i]) && s[i]!==" "){
                num = num*10 + parseInt(s[i++]);
            }
            i--;//important
            ans += sign*num;
        }
    }
    return ans;
}