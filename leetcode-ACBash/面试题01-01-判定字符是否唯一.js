/***
 * @creater:ACBash
 * @create_time:22-9-27 18:32:8
 * @last_modify:ACBash
 * @modify_time:22-9-27 18:41:28
 * @line_count:26
 **/

 const isUnique = (astr) => {
    let set = new Set();

    for(let i = 0; i < astr.length; i++){
        if(!set.has(astr[i])) set.add(astr[i]);
        else return false;
    }

    return true;
};

//状压DP
const isUnique = (astr) => {
    let state = 0;

    for(let i = 0; i < astr.length; i++){
        const index = astr[i].charCodeAt() - 97;

        let cur = 1 << index;

        if(cur & state) return false;
        else state = cur | state;
    }

    return true;
};