/* 调测用例 */
/* console.log(evalRPN(["2","1","+","3","*"])); */
/* console.log(evalRPN(["4","13","5","/","+"])); */

/* 1.逆波兰栈操作定义解 */
/* PS:trunc方法可换成>>0或者|0 */
const evalRPN = (tokens) => {
    let numStack = [];
    for(let i=0; i<tokens.length; i++){
        if(!isNaN(tokens[i])){
            numStack.push(parseInt(tokens[i]));
        }else{
            switch(tokens[i]){
                case "+":
                    numStack.push(numStack.pop()+numStack.pop());
                    break;
                case "-":
                    numStack.push(-numStack.pop()+numStack.pop());
                    break;
                case "*":
                    numStack.push(numStack.pop()*numStack.pop());
                    break;
                case "/":
                    let a = numStack.pop(), b=numStack.pop();
                    numStack.push(b/a | 0);
                    break;
                default: console.log("error!");
            }
        }
    }
    return numStack.pop();
}