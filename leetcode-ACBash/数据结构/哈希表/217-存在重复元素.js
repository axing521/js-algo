/***
 * @creater:ACBash
 * @create_time:22-3-6 17:3:51
 * @last_modify:ACBash
 * @modify_time:22-3-6 17:17:44
 * @line_count:10
 **/

const containsDuplicate = (nums) => {
    let set = new Set();

    for(const num of nums){
        if(set.has(num)) return true;
        set.add(num);
    }

    return false;
};