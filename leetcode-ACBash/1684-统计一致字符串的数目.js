/***
 * @creater:ACBash
 * @create_time:22-11-8 1:21:56
 * @last_modify:ACBash
 * @modify_time:22-11-8 1:25:19
 * @line_count:16
 **/

//API怪
const countConsistentStrings = (allowed, words) => {
    let ans = 0;

    for(const word of words){
        for(const c of word){
            if(!allowed.includes(c)){
                ans--;
                break;
            }
        }
        ans++;
    }

    return ans;
};