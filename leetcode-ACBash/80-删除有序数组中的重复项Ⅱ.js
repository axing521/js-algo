/***
 * @creater:ACBash
 * @create_time:22-3-14 11:17:40
 * @last_modify:ACBash
 * @modify_time:22-3-14 12:9:14
 * @line_count:29
 **/

/* 读写指针 */
const removeDuplicates = (nums) => {
    if(!nums.length) return 0;

    const len = nums.length;
    let fast = 0, slow = 0, flag = 0;

    while(fast < len){
        const [read, write] = [nums[fast], nums[slow]];
        
        if(read == write){
            flag++;
            fast++;

            if(flag == 2){
                slow++;
                nums[slow] = write;
            }
        }else{
            fast++;
            slow++;
            
            nums[slow] = read;
            flag = 1;
        }
    }

    return slow + 1;
};