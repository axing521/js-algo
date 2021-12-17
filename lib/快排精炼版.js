/***
 * @creater:ACBash
 * @create_time:21-12-17 14:50:48
 * @last_modify:ACBash
 * @modify_time:21-12-17 14:50:48
 * @line_count:11
 **/

const quickSort = (list) => {
    if(list.length < 2) return list;

    const midValue = list[0], left = [], right = [];

    for(let i = 1; i < list.length; i++){
        list[i] > midValue ? left.push(list[i]) : right.push(list[i]);
    }

    return quickSort(left).concat(midValue, quickSort(right));
}