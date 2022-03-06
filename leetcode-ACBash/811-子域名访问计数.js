/***
 * @creater:ACBash
 * @create_time:22-3-6 13:58:14
 * @last_modify:ACBash
 * @modify_time:22-3-6 16:12:18
 * @line_count:24
 **/

 const subdomainVisits = (cpdomains) => {
    let map = {};

    cpdomains.forEach(item => {
        const tuple = item.split(" ");
        const count = +tuple[0];
        let str = tuple[1];

        map[str] = map[str] ? map[str] + count : count;

        while(str.indexOf(".") > -1){
            str = str.substring(str.indexOf(".") + 1);
            map[str] = map[str] ? map[str] + count : count;
        }
    });

    let ans = [];

    for(const key in map){
        ans.push(`${map[key]} ${key}`);
    }

    return ans;
};