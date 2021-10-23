/***
 * @creater:ACBash
 * @create_time:21-10-23 15:54:17
 * @last_modify:ACBash
 * @modify_time:21-10-23 16:38:31
 * @line_count:31
 **/

/* 模拟栈，括号匹配 */
const isValid = (s) => {
    let stack = [];

    for(const i in s){
        if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
            stack.push(s[i]);
        }else if(s[i] == ")" && stack[stack.length-1] == "("){
            stack.pop();
        }else if(s[i] == "]" && stack[stack.length-1] == "["){
            stack.pop();
        }else if(s[i] == "}" && stack[stack.length-1] == "{"){
            stack.pop();
        }else{
            return false;
        }
    }

    return !stack.length;
};

/* API怪，开心消消乐 */
var isValid = function (s) {
    while (s.includes("[]") || s.includes("()") || s.includes("{}")) {
      s = s.replace("[]", "").replace("()", "").replace("{}", "");
    }
    
    return s.length === 0;
};

console.log(isValid("["));