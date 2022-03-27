/***
 * @creater:ACBash
 * @create_time:22-3-27 14:41:57
 * @last_modify:ACBash
 * @modify_time:22-3-27 17:9:18
 * @line_count:14
 **/

/* 贪心，多指针 */
const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);

    let left = 0, right = people.length - 1, ans = 0;

    while(left <= right){
        if(people[left] + people[right] <= limit) left++;
        right--;
        ans++;
    }

    return ans;
};