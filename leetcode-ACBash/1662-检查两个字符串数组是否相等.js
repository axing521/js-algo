/***
 * @creater:ACBash
 * @create_time:22-11-1 10:3:53
 * @last_modify:ACBash
 * @modify_time:22-11-1 10:3:59
 * @line_count:13
 **/

const arrayStringsAreEqual = (word1, word2) => {
    let str1 = "", str2 = "";

    for(const c1 of word1){
        str1 += c1;
    }

    for(const c2 of word2){
        str2 += c2;
    }

    return str1 == str2;
};