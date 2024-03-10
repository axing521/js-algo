// 给定字符串s，找到s中最长的回文子串
// 双指针，往两边扩散

const func1 = (s) => {
    let ans = "";

    const palindrome = (left, right) => {
        while(left >= 0 && right < s.length && s[left] == s[right]){
            left--;
            right++;
        }

        if(right - left - 1 > ans.length) ans = s.slice(left + 1, right);
    };

    for(let i = 0; i < s.length; i++){
        palindrome(i, i);
        palindrome(i, i + 1);
    }

    return ans;
};

