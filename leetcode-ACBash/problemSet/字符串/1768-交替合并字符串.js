/***
 * @creater:ACBash
 * @create_time:22-10-23 19:25:59
 * @last_modify:ACBash
 * @modify_time:22-10-23 19:31:36
 * @line_count:14
 **/

const mergeAlternately = (word1, word2) => {
    let newStr = "";
    let index1 = 0, index2 = 0;

    while(index1 < word1.length && index2 < word2.length){
        newStr += word1[index1++];
        newStr += word2[index2++];
    }

    if(index1 < word1.length) newStr += word1.slice(index1);
    else newStr += word2.slice(index2);

    return newStr;
};