/***
 * @creater:ACBash
 * @create_time:22-10-10 17:27:6
 * @last_modify:ACBash
 * @modify_time:22-10-10 17:27:13
 * @line_count:53
 **/

//排序
//哈希表
const findErrorNums = (nums) => {
    const n = nums.length;
    let hash = new Array(n + 1).fill(0);
    let ans = [-1, -1];

    for(const num of nums){
        hash[num]++;
    }

    for(let i = 1; i <= n; i++){
        if(hash[i] == 0) ans[1] = i;

        if(hash[i] == 2) ans[0] = i;
    }

    return ans;
};

//位运算,具体含义看力扣官方题解
const findErrorNums = (nums) => {
    const n = nums.length;
    for(let i = 1; i <= n; i++){
        nums.push(i);
    }

    let xor = 0;

    for(const num of nums){
        xor ^= num;
    }

    let lowbit = xor & (-xor);
    let num1 = 0;
    let num2 = 0;

    for(const num of nums){
        if((num & lowbit) == 0){
            num1 ^= num;
        }else{
            num2 ^= num;
        }
    }

    for(let i = 0; i < n; i++){
        if(nums[i] == num1){
            return [num1, num2];
        }
    }

    return [num2, num1];
};