/***
 * @creater:ACBash
 * @create_time:22-3-29 13:16:1
 * @last_modify:ACBash
 * @modify_time:22-3-29 13:33:29
 * @line_count:28
 **/

 const maxVowels = (s, k) => {
    let map = {
        "a": 1,
        "e": 2,
        "i": 4,
        "o": 8,
        "u": 16,
    };

    let ans = 0, window = 0;

    for(let i = 0; i < k; i++){
        if(map[s[i]]) window++;
    }

    ans = window;

    const len = s.length;
    let left = 0, right = k;

    while(right < len){
        map[s[right++]] && window++;
        map[s[left++]] && window--;
        ans = Math.max(ans, window);
    }

    return ans;
};