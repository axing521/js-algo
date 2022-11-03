/***
 * @creater:ACBash
 * @create_time:22-11-3 15:2:37
 * @last_modify:ACBash
 * @modify_time:22-11-3 15:2:50
 * @line_count:76
 **/

//API怪
const maxRepeating = (sequence, word) => {
    let ans = 0;
    let str = word;

    while(sequence.includes(str)){
        ans++;
        str += word;
    }

    return ans;
};

//枚举 + DP(以i结尾的word最大重复次数)
const maxRepeating = (sequence, word) => {
    const n = sequence.length, m = word.length;
    if(n < m) return 0;

    let dp = new Array(n).fill(0);
    
    for(let i = m - 1; i < n; i++){
        let flag = true;
        
        for(let j = 0; j < m; j++){
            if(sequence[i - m + 1 + j] !== word[j]){
                flag = false;
                break;
            }
        }

        if(flag) dp[i] = (i == m - 1 ? 0 : dp[i - m]) + 1;
    }

    return Math.max(...dp);
};

//KMP
const maxRepeating = (sequence, word) => {
    const n = sequence.length, m = word.length;
    if(n < m) return 0;

    //建立模式串前缀函数
    let pi = new Array(m).fill(0);

    for(let i = 1; i < m; i++){
        let j = pi[i - 1];

        while(j > 0 && word[i] != word[j]){
            j = pi[j - 1];
        }

        if(word[i] == word[j]) j++;
        pi[i] = j;
    }
    
    //串比较
    let dp = new Array(n).fill(0);
    let j = 0;

    for(let i = 0; i < n; i++){
        while(j > 0 && word[j] != sequence[i]){
            j = pi[j - 1];
        }
        if(word[j] == sequence[i]){
            j++;
            if(j == m){
                dp[i] = (i >= m ? dp[i - m] : 0) + 1;
                j = pi[j - 1];
            }
        }
    }
    
    return Math.max(...dp);
};

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"));