/***
 * @creater:ACBash
 * @create_time:22-3-13 17:58:5
 * @last_modify:ACBash
 * @modify_time:22-3-14 11:17:42
 * @line_count:19
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