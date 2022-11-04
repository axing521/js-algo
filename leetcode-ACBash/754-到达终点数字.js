/***
 * @creater:ACBash
 * @create_time:22-11-4 12:46:9
 * @last_modify:ACBash
 * @modify_time:22-11-4 12:48:33
 * @line_count:11
 **/

const reachNumber = (target) => {
    target = Math.abs(target);
    let k = 0;
    
    while(target > 0){
        k++;
        target -= k;
    }

    return target % 2 == 0 ? k : k + 1 + k % 2;
};