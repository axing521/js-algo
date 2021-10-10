/***
 * @creater:ACBash
 * @create_time:21-10-10 20:20:50
 * @last_modify:ACBash
 * @modify_time:21-10-10 21:0:15
 * @line_count:19
 **/

/* 也是前缀和，不过注意，下车的人也要减去，也即考虑两个边界即可，差分 */
const corpFlightBookings = (bookings,n) => {
    const nums = new Array(n).fill(0);

    for(const booking of bookings){
        nums[booking[0]-1] += booking[2];
        if(booking[1] < n){
            nums[booking[1]] -= booking[2];
        }
    }

    for(let i=1; i<n; i++){
        nums[i] += nums[i-1];
    }

    return nums;
};

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));