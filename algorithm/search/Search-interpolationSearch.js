//要求：数据结构已排序

import { Compare, defaultCompare, defaultDiff, defaultEquals, DOES_NOT_EXIST } from "../util";

export default function interpolationSearch(arr,value,compareFn=defaultCompare,equalsFn=defaultEquals,diffFn=defaultDiff){
    let low=0;
    let high=arr.length-1;
    let position=-1;
    let delta=-1;
    
    while(low<=high && biggerOrEquals(value,arr[low],compareFn) && lesserOrEquals(value,arr[high],compareFn)){
        delta=diffFn(value,arr[low]) / diffFn(arr[high],arr[low]);
        position = low + Math.floor((high-low)*delta);
        if(equalsFn(arr[position],value)){
            return position;
        }
        if(compareFn(arr[position],value) === Compare.LESS_THAN){
            low=position+1;
        }else{
            high=position-1;
        }
    }
    return DOES_NOT_EXIST;
}

export function lesserOrEquals(a,b,compareFn){
    const comp=compareFn(a,b);
    return comp===Compare.LESS_THAN || comp===Compare.EQUALS;
}
export function biggerOrEquals(a,b,compareFn){
    const comp=compareFn(a,b);
    return comp===Compare.BIGGER_THAN || comp===Compare.EQUALS;
}