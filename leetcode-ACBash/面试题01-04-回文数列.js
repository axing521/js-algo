/***
 * @creater:ACBash
 * @create_time:22-3-12 19:57:4
 * @last_modify:ACBash
 * @modify_time:22-3-12 20:15:28
 * @line_count:16
 **/

const canPermutePalindrome = (s) => {
    let map = new Map();

    for(const c of s){
        if(!map.has(c)) map.set(c, 0);
        map.set(c, map.get(c) + 1);
    }

    let oddNum = 0;

    map.forEach(val => {
        if(val % 2) oddNum++;
    });

    return oddNum > 1 ? false : true;
};