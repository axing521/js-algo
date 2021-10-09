/* 调测用例 */
/* console.log(decodeString("3[a]")); */

/* 1.双栈 */
const decodeString = (s) => {
    let strStack = [];
    let numStack = [];
    let result = "";
    let num = 0;
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            num = num*10 + Number(s[i]);
        }else if(s[i]==="["){
            strStack.push(result);
            numStack.push(num);
            result = "";
            num = 0;
        }else if(s[i]==="]"){
            let repeatTimes = numStack.pop();
            result = strStack.pop() + result.repeat(repeatTimes);
        }else{
            result += s[i];//s[i]加在右边
        }
    }
    return result;
}

/* 2.单栈 */
const decodeString = (s) => {
    let stack0 = [];
    for(let i=0; i<s.length; i++){
        if(s[i]!=="]"){
            stack0.push(s[i]);
            continue;
        }
        let str="";
        let cur=stack0.pop();
        while(cur!=="["){
            str = cur + str;
            cur = stack0.pop();
        }
        let num="";
        cur=stack0.pop();
        while(!isNaN(cur)){
            num = cur + num;
            cur = stack0.pop();
        }
        stack0.push(cur);
        stack0.push(str.repeat(num));
    }
    return stack0.join("");
}
