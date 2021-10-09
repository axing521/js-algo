/* 调测用例 */
/* console.log(decodeString("3[a]")); */

/* 1.双栈 */
const decodeString = (s) => {
    let numStack = [];
    let strStack = [];
    let num = 0;
    let str = "";
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])){
            num = num*10 + parseInt(s[i]); 
        }else if(s[i]==="["){
            numStack.push(num);
            strStack.push(str);
            num = 0;
            str = ""; 
        }else if(s[i]==="]"){
            str = strStack.pop() + str.repeat(numStack.pop());
        }else{
            str = str + s[i];
        }
    }
    return str;
};

/* 2.单栈 */
const decodeString = (s) => {
    let soloStack = [];
    let str = "";
    let num = "";
    for(let i=0; i<s.length; i++){
        if(s[i]!=="]"){
            soloStack.push(s[i]);
        }else{
            let strTemp = soloStack.pop();
            while(strTemp!=="["){
                str = strTemp + str;
                strTemp = soloStack.pop();
            }
            let numTemp = soloStack.pop();
            while(!isNaN(numTemp)){
                num = numTemp + num;
                numTemp = soloStack.pop();
            }
            soloStack.push(numTemp);
            str = str.repeat(parseInt(num));
            soloStack.push(str);
            str = "";
            num = "";
        }
    }
    /* console.log(soloStack.join("")); */
    return soloStack.join("");
};
