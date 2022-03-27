/***
 * @creater:ACBash
 * @create_time:22-3-27 19:0:43
 * @last_modify:ACBash
 * @modify_time:22-3-27 19:20:20
 * @line_count:18
 **/

 var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;

        while(left <= right){
            const mid = left + ((right - left) >> 1);

            if(isBadVersion(mid)) right = mid - 1;
            else left = mid + 1;
        }

        return isBadVersion(left) ? left : 0;
    };
};