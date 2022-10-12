/***
 * @creater:ACBash
 * @create_time:22-10-12 14:9:12
 * @last_modify:ACBash
 * @modify_time:22-10-12 14:9:12
 * @line_count:20
 **/

const numComponents = (head, nums) => {
    let set = new Set(nums);
    let isContinuous = false;
    let ans = 0;
    
    while(head){
        if(set.has(head.val)){
            if(!isContinuous){
                isContinuous = true;
                ans++;
            }
        }else{
            isContinuous = false;
        }

        head = head.next;
    }

    return ans;
};