/***
 * @creater:ACBash
 * @create_time:22-11-5 1:4:1
 * @last_modify:ACBash
 * @modify_time:22-11-5 1:4:7
 * @line_count:39
 **/

//括号用栈
const parseBoolExpr = (expression) => {
    let stack = [];

    for(const c of expression){
        if(c == ","){
            continue;
        }else if(c != ")"){
            stack.push(c);
        }else{
            let f = 0, t = 0;

            let poped = stack.pop();

            while(poped != "("){
                if(poped == "f") f++;
                else t++;
                poped = stack.pop();
            }

            const op = stack.pop();

            switch(op){
                default:
                case "!":
                    stack.push(f == 1 ? "t" : "f");
                    break;
                case "&":
                    stack.push(f > 0 ? "f" : "t");
                    break;
                case "|":
                    stack.push(t > 0 ? "t" : "f");
                    break;
            }
        }
    }

    return stack[0] == "t" ? true : false;
};