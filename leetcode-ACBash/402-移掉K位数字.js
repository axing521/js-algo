/***
 * @creater:ACBash
 * @create_time:21-10-16 17:54:8
 * @last_modify:ACBash
 * @modify_time:21-10-17 17:34:33
 * @line_count:20
 **/

/* 和“LC-316：去除重复字母”很像 */
const removeKdigits = (num,k) => {
    let stack = [];
    for(let i=0; i<num.length; i++){
        while(stack.length && stack[stack.length-1] > num[i] && k){ 
            stack.pop();
            k--;
        }
        stack.push(num[i]);
    }
    while(k--) stack.pop();

    while(stack.length>1){
        if(stack[0]=="0") stack.shift();
        else break;
    }
    return stack.length ? stack.join("") : "0";
};

console.log(removeKdigits("9",1));