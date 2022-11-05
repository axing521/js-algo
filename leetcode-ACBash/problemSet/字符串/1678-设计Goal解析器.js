/***
 * @creater:ACBash
 * @create_time:22-11-6 0:47:11
 * @last_modify:ACBash
 * @modify_time:22-11-6 0:47:18
 * @line_count:21
 **/

const interpret = (command) => {
    let ans = "";

    for(let i = 0; i < command.length; i++){
        const c = command[i];
        
        if(c != "(" && c != ")"){
            ans += "G";
        }else if(c == "("){
            if(command[i + 1] == ")"){
                ans += "o";
                i += 1;
            }else{
                ans += "al";
                i += 3;
            } 
        }
    }

    return ans;
};