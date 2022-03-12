/***
 * @creater:ACBash
 * @create_time:22-3-12 20:14:36
 * @last_modify:ACBash
 * @modify_time:22-3-12 20:32:14
 * @line_count:24
 **/

/* 可以用map，确定map可以使用数组 */
const findWords = (words) => {
    const arr1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    const arr2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    const arr3 = ["z", "x", "c", "v", "b", "n", "m"];

    let ans = [];

    words.forEach(word => {
        let flag = [0, 0, 0];

        for(const c of word){
            if(arr1.includes(c)) flag[0] = 1; 
            if(arr2.includes(c)) flag[1] = 1; 
            if(arr3.includes(c)) flag[2] = 1; 
        }

        const flagSum = flag.reduce((prev, cur) => prev + cur, 0);

        if(flagSum < 2) ans.push(word);
    });

    return ans;
};