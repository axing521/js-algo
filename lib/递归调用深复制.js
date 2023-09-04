/***
 * @creater:ACBash
 * @create_time:23-3-14 14:32:36
 * @last_modify:ACBash
 * @modify_time:23-3-14 14:34:24
 * @line_count:27
 **/

const deepCopy = (obj) => {
    let newObj = obj.constructor == Array ? [] : {};

    if(typeof obj != "object"){
        return obj;
    }else{
        for(const key in obj){
            if(typeof obj[key] == "object"){
                newObj[key] = deepCopy(obj[key]);
            }else{
                newObj[key] = obj[key];
            }
        }
    }

    return newObj;
}

let a = {
    "id": 1,
    "name": "axing",
    "like": [{"1": "dyj"}, {"2": [1, 2]}]
}

let b = deepCopy(a);

console.log(a == b);