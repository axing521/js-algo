/***
 * @creater:ACBash
 * @create_time:23-3-21 16:20:31
 * @last_modify:ACBash
 * @modify_time:23-3-21 17:5:46
 * @line_count:24
 **/

//重复头尾互换
const repeatedSubstringPattern = (s) => {
    let doubleStr = s + s;
    return doubleStr.substring(1, doubleStr.length - 1).includes(s);
};

//用repeat，暴力
const repeatedSubstringPattern = (s) => {
    const len = s.length;
    let substr = "";

    for(let i = 0; i < len >> 1; i++){
        substr += s[i];

        if(s == substr.repeat(Math.floor(len / substr.length))){
            return true;
        }
    }

    return false;
};

//KMP
