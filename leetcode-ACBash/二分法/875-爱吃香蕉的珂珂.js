/***
 * @creater:ACBash
 * @create_time:22-3-26 20:10:20
 * @last_modify:ACBash
 * @modify_time:22-3-27 14:23:28
 * @line_count:50
 **/

 const minEatingSpeed = (piles, h) => {
    const finishLessThanH = (speed) => {
        let time = 0;

        for(const pile of piles){
            time += Math.ceil(pile / speed);

            if(time > h) return false;
        }

        return true;
    };

    let left = 1, right = Math.max(...piles);

    while(left < right){
        const mid = left + ((right - left) >> 1);

        if(finishLessThanH(mid)) right = mid;
        else left = mid + 1;
    }

    return left;
};

/* 搜索区间模板化 */
const minEatingSpeed = (piles, h) => {
    const finishLessThanH = (speed) => {
        let time = 0;

        for(const pile of piles){
            time += Math.ceil(pile / speed);

            if(time > h) return false;
        }

        return true;
    };

    let left = 1, right = Math.max(...piles);

    while(left <= right){
        const mid = left + ((right - left) >> 1);

        if(finishLessThanH(mid)) right = mid - 1;
        else left = mid + 1;
    }

    return finishLessThanH(left) ? left : -1;
};