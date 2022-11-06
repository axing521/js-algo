/***
 * @creater:ACBash
 * @create_time:22-11-7 0:34:16
 * @last_modify:ACBash
 * @modify_time:22-11-7 0:59:28
 * @line_count:37
 **/

//划分左右两段，对每段都枚举出可以加小数点的情况，然后做笛卡尔积
const countSituations = (s) => {
    let situations = [];

    //不加小数点
    if(s[0] != "0" || s === "0") situations.push(s);

    //加小数点
    for(let p = 1; p < s.length; p++){
        if(s[0] == "0" && p != 1 || s[s.length - 1] == "0") continue;
        situations.push(s.slice(0, p) + "." + s.slice(p));
    }

    return situations;
};

const ambiguousCoordinates = (s) => {
    let ans = [];

    s = s.slice(1, s.length - 1);
    const n = s.length;

    for(let i = 1; i < n; i++){
        const leftSituations = countSituations(s.slice(0, i));
        if(leftSituations.length == 0) continue;
        const rightSituations = countSituations(s.slice(i));
        if(rightSituations.length == 0) continue;
        
        for(const left of leftSituations){
            for(const right of rightSituations){
                ans.push("(" + left + ", " + right + ")");
            }
        }
    }

    return ans;
};