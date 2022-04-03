/***
 * @creater:ACBash
 * @create_time:22-4-3 14:16:40
 * @last_modify:ACBash
 * @modify_time:22-4-3 17:51:37
 * @line_count:18
 **/

 const maxPower = (s) => {
    let pre = s[0], ans = 0, len = 0;

    for(const c of s){
        if(c != pre){
            len = 1;
            pre = c;
            continue;
        }else{
            len++;
            ans = Math.max(ans, len);
        }
    }

    return ans;
};

console.log(minOperations([1,0,0,0,0,1], 2))