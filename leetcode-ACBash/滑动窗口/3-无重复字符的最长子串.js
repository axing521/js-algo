/***
 * @creater:ACBash
 * @create_time:22-3-29 14:16:2
 * @last_modify:ACBash
 * @modify_time:22-3-29 14:16:2
 * @line_count:51
 **/

//滑动窗口
//用了includes，150ms
const lengthOfLongestSubstring = (s) => {
    let len = 0, slideWindow = [];
    for(let i=0; i<s.length; i++){
        let char0 = s[i];
        while(slideWindow.includes(char0)){
            slideWindow.shift();
        }
        slideWindow.push(char0);
        if(len<slideWindow.length) len = slideWindow.length;
    }
    return len;
};

//用哈希表{}
const lengthOfLongestSubstring = (s) => {
    let len = 0, slideWindow = [], map0 = {};
    for(let i=0; i<s.length; i++){
        let char0 = s[i];
        while(map0[char0]){
            map0[slideWindow.shift()] = undefined;
        }
        slideWindow.push(char0);
        map0[char0] = true;
        if(len<slideWindow.length){
            len = slideWindow.length;
        }
    }
    return len;
};

console.log(lengthOfLongestSubstring("abcabcbb"));

const lengthOfLongestSubstring = (s) => {
    let slow = 0;
    let set = new Set();
    let ans = 0;

    for(let fast = 0; fast < s.length; fast++){
        while(set.has(s[fast])){
            set.delete(s[slow++]);
        }

        set.add(s[fast]);

        ans = Math.max(ans, fast - slow + 1);
    }

    return ans;
};