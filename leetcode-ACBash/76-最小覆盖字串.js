/***
 * @creater:ACBash
 * @create_time:22-3-29 19:24:20
 * @last_modify:ACBash
 * @modify_time:23-3-13 17:13:36
 * @line_count:106
 **/

//滑动窗口
/* 265/266,最后一个超时了，可惜 */
const minWindow = (s, t) => {
    let map0 = {}, test = t.split(""), len = 0, start = s.length;

    let left = 0;
    for (let right = 0; right < s.length+1; right++) {
        let char0 = s[right];
        map0[char0] = map0[char0] ? map0[char0] + 1 : 1;
        let { ...map1 } = map0;

        while (test.every((item) => {
            return map1[item]--;
        })) {
            if (len === 0 || right-left+1 < len) {
                len = right-left+1;
                start = left;
            }
            let leftChar = s[left];
            map0[leftChar]--;
            map1[leftChar]--;
            test.forEach((item) => {
                map1[item]++;
            })
            left++;
        }
    }

    if(start===s.length) return "";
    else return s.substring(start,start+len);
};

//不用数组，用left，right
const minWindow = (s,t) => {
    let map0 = {}, missingType = 0, len = 0, start = s.length;
    
    for(let tChar of t){
        if(!map0[tChar]){
            missingType++;
            map0[tChar] = 1;
        }else{
            map0[tChar]++;
        }
    }

    let left = 0;
    for(let right=0; right<s.length; right++){
        let sChar = s[right];

        if(map0[sChar]!==undefined) map0[sChar]--;
        if(map0[sChar]===0) missingType--;

        while(missingType === 0){
            if(len===0 || right-left+1<len){
                len = right-left+1;
                start = left;
            }

            let leftChar = s[left];

            if(map0[leftChar]!==undefined) map0[leftChar]++;
            if(map0[leftChar]>0) missingType++;

            left++;
        }
    }
    
    if(start===s.length) return "";
    else return s.substring(start,start+len);
}

const minWindow = (s, t) => {
    let map = {}, cNum = 0;
    
    for(const c of t){
        if(!map[c]){
            map[c] = 0;
            cNum++;
        } 
        map[c]++;
    }

    let slow = 0, minSubstr = [-Infinity, -1], flag = false;    //注意为什么要这样初始化minSubstr，因为这样能够最大化区间，并且在找不到子串时能返回“”，另外注意门控信号flag
    
    for(let fast = 0; fast < s.length; fast++){
        if(map[s[fast]] != undefined){
            map[s[fast]]--;
            
            if(map[s[fast]] == 0) cNum--;
            
            if(cNum == 0) flag = true;

            while(cNum == 0){
                if(map[s[slow]] != undefined) map[s[slow]]++;
                if(map[s[slow]] == 1) cNum++;
                slow++;
            }

            if(flag && fast - slow + 1 < minSubstr[1] - minSubstr[0]) minSubstr = [slow - 1, fast];

            flag = false;
        }
    }

    return s.substring(minSubstr[0], minSubstr[1] + 1);
};