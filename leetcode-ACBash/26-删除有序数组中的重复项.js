/***
 * @creater:ACBash
 * @create_time:22-3-13 17:58:5
 * @last_modify:ACBash
 * @modify_time:22-3-28 16:31:44
 * @line_count:36
 **/

/* 快慢指针，读写指针 */
const removeDuplicates = (nums) => {
    if(!nums.length) return 0;

    const len = nums.length;
    let fast = 0, slow = 0;

    while(fast < len){
        const [read, write] = [nums[fast], nums[slow]];

        if(read != write){
            fast++;
            slow++;
            nums[slow] = read;
        }else fast++;
    }

    return slow + 1;
};

const removeDuplicates = (nums) => {
    let slow = 0, fast = 0, pre = Infinity;

    while(fast < nums.length){
        if(pre != nums[fast]){
            nums[slow] = nums[fast];
            pre = nums[slow];
            fast++;
            slow++;
        }else{
            fast++;
        }
    }

    return slow;
};