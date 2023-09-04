/***
 * @creater:ACBash
 * @create_time:22-10-10 13:54:25
 * @last_modify:ACBash
 * @modify_time:22-10-10 13:54:34
 * @line_count:31
 **/

//哈希表
const singleNumber = (nums) => {
    let hash = new Map();
    
    for(const num of nums){
        hash.set(num, (hash.get(num) || 0) + 1);
    }

    for(const [key, val] of hash.entries()){
        if(val == 1) return key;
    }
};

//位运算
const singleNumber = (nums) => {
    let ans = 0;

    //31也要判断，会有负数
    for(let i = 0; i <= 31; i++){
        let count = 0;
        let bit = 1 << i;

        for(const num of nums){
            if(num & bit) count++;
        }

        if(count % 3) ans |= bit;
    }

    return ans;
};