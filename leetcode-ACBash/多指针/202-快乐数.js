/***
 * @creater:ACBash
 * @create_time:22-3-28 16:33:7
 * @last_modify:ACBash
 * @modify_time:22-3-29 13:16:3
 * @line_count:25
 **/

 const isHappy = (n) => {
    let slow = n, fast = n;

    const powSum = (num) => {
        let ans = 0;

        while(num){
            ans += Math.pow(num % 10, 2);
            num = (num / 10) | 0;
        }
        
        return ans;
    };

    while(fast != 1){
        fast = powSum(fast) && powSum(powSum(fast));
        slow = powSum(slow);

        if(fast == 1) return true;

        if(fast == slow) return false;
    }

    return true;
};