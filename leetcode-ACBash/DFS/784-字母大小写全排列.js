/***
 * @creater:ACBash
 * @create_time:22-10-28 18:30:37
 * @last_modify:ACBash
 * @modify_time:22-10-31 13:45:41
 * @line_count:56
 **/

//递归
const letterCasePermutation = (s) => {
    const change = (c) => {
        if(c >= "A" && c <= "Z") return c.toLowerCase();
        if(c >= "a" && c <= "z") return c.toUpperCase();
    };
    
    const dfs = (s, i) => {
        if(i == s.length) return [""];
        
        let c = s[i];
        let headList = [c];
        if(c >= "A") headList.push(change(c));

        let tailList = dfs(s, i + 1);
        let ans = [];
        
        for(const tail of tailList){
            for(const head of headList){
                ans.push(head + tail);
            }
        }

        return ans;
    };

    return dfs(s, 0);
};

//迭代
const letterCasePermutation = (s) => {
    const change = (c) => {
        if(c >= "A" && c <= "Z") return c.toLowerCase();
        if(c >= "a" && c <= "z") return c.toUpperCase();
    };

    let ans = [""];

    for(let i = s.length - 1; i >= 0; i--){
        let c = s[i];
        let headList = [c];
        if(c >= "A") headList.push(change(c));

        let track = [];

        for(const tail of ans){
            for(const head of headList){
                track.push(head + tail);
            }
        }

        ans = track;
    }

    return ans;
};