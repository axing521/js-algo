/***
 * @creater:ACBash
 * @create_time:21-10-27 14:34:1
 * @last_modify:ACBash
 * @modify_time:21-10-27 16:7:40
 * @line_count:46
 **/

/* 雀氏牛逼，BFS，属于是BFS的真谛了，最少，一个一个试，ok就出来|O(n*2^n) */
const isValid = (str) => {
    let count = 0;

    for(const c of str){
        if(c == "("){
            count++;
        }else if(c == ")"){
            count--;
            if(count < 0){
                return false;
            }
        }
    }

    return count === 0;
};

const removeInvalidParentheses = (s) => {
    let ans = [], curSet = new Set();

    curSet.add(s);
    while(true){
        for(const str of curSet){
            if(isValid(str)){
                ans.push(str);
            }
        }

        if(ans.length) return ans;

        const nextSet = new Set();
        for(const str of curSet){
            for(let i=0; i<str.length; i++){
                if(i > 0 && str[i] === str[i-1]){
                    continue;
                }
                if(str[i] == "(" || str[i] == ")"){
                    nextSet.add(str.substring(0,i) + str.substring(i+1));
                }
            }
        }

        curSet = nextSet;
    }
};