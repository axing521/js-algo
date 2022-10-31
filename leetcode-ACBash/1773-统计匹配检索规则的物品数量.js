/***
 * @creater:ACBash
 * @create_time:22-10-31 13:3:47
 * @last_modify:ACBash
 * @modify_time:22-10-31 13:3:54
 * @line_count:11
 **/

const countMatches = (items, ruleKey, ruleValue) => {
    let ans = 0;

    for(const [type, color, name] of items){
        if(ruleKey == "type" && ruleValue == type) ans++; 
        if(ruleKey == "color" && ruleValue == color) ans++; 
        if(ruleKey == "name" && ruleValue == name) ans++; 
    }

    return ans;
};