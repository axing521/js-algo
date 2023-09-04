/***
 * @creater:ACBash
 * @create_time:22-9-22 15:15:53
 * @last_modify:ACBash
 * @modify_time:22-9-22 16:10:3
 * @line_count:37
 **/

//双指针
const longestPalindrome = (s) => {
    let ans = "";

    const palindrome = (left, right) => {
        while(left >= 0 && right < s.length && s[left] == s[right]){
            left--;
            right++;
        }

        if(right - left - 1 > ans.length) ans = s.slice(left + 1, right - 1 + 1);
    };

    for(let i = 0; i < s.length; i++){
        palindrome(i, i);
        palindrome(i, i + 1);
    }

    return ans;
};

//DP
const longestPalindrome = (s) => {
    let ans = "";
    const len = s.length;
    let dp = Array.from({length: len}, () => new Array(len).fill(false));

    for(let i = len - 1; i >= 0; i--){
        for(let j = i; j < len; j++){
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            
            if(dp[i][j] && j - i + 1 > ans.length) ans = s.slice(i, j + 1);
        }
    }

    return ans;
};