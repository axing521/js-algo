/* 调测用例 */
/* console.log(evalRPN(["2","1","+","3","*"])); */
/* console.log(evalRPN(["4","13","5","/","+"])); */

/* 1.逆波兰栈操作定义解 */
/* PS:trunc方法可换成>>0 */
const evalRPN = (tokens) => {
    let stack0 = [];
    for(let i=0; i<tokens.length; i++){
        if(!Number.isNaN(Number(tokens[i]))){
            stack0.push(tokens[i]);
        }else{
            let b = stack0.pop(), a = stack0.pop(), c;
            switch(tokens[i]){
                case "+":   c = Number(a) + Number(b);break;
                case "-":   c = Number(a) - Number(b);break;
                case "*":   c = Number(a) * Number(b);break;
                case "/":   c = Math.trunc(Number(a) / Number(b));break;
                default:    console.log("error");
            }
            c = String(c);
            stack0.push(c);
        }
    }
    const val = Number(stack0.pop());
    return val;
};

console.log(evalRPN(["4","13","5","/","+"]));