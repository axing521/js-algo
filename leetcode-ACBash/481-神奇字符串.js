/***
 * @creater:ACBash
 * @create_time:22-10-31 20:16:23
 * @last_modify:ACBash
 * @modify_time:22-10-31 20:16:30
 * @line_count:24
 **/

const magicalString = (n) => {
    if(n < 4) return 1;

    let s = new Array(n).fill(0);
    s[0] = "1", s[1] = "2", s[2] = "2";
    let ans = 1;
    let i = 2, j = 3;

    while(j < n){
        let size = s[i] - "0";
        const num = 3 - (s[j - 1] - "0");

        while(size > 0 && j < n){
            s[j] = String.fromCharCode("0".charCodeAt() + num);
            if(num == 1) ans++;
            size--;
            j++;
        }

        i++;
    }

    return ans;
};