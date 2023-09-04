/***
 * @creater:ACBash
 * @create_time:22-9-19 23:27:28
 * @last_modify:ACBash
 * @modify_time:22-9-19 23:44:22
 * @line_count:32
 **/

const partition = (s) => {
    let ans = [];

    const isPalindrome = (s) => {
        let left = 0, right = s.length - 1;

        while(left < right && s[left] == s[right]){
            left++;
            right--;
        }

        return left >= right;
    };

    const backtrack = (track, start) => {
        if(track.join("").length == s.length) return ans.push([...track]);

        for(let i = start; i < s.length; i++){
            const sliced = s.slice(start, i + 1);

            if(!isPalindrome(sliced)) continue;

            track.push(sliced);
            backtrack(track, i + 1);
            track.pop();
        }   
    };

    backtrack([], 0);

    return ans;
};