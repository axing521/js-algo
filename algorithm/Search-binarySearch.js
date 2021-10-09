//要求：数据结构已排序

import { Compare, defaultCompare, DOES_NOT_EXIST } from "../util";
import quickSort from "./Sort-quickSort";

export default function binarySearch(arr,value,compareFn=defaultCompare){
    const sortedArr=quickSort(arr);
    let low=0;
    let high=sortedArr.length-1;
    while(lesserOrEquals(low,high,compareFn)){
        const mid=Math.floor((low+high)/2);
        const item=sortedArr[mid];
        if(compareFn(item,value) === Compare.LESS_THAN){
            low=mid+1;
        }else if(compareFn(item,value) === Compare.BIGGER_THAN){
            high=mid-1;
        }else{
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}

export function lesserOrEquals(a,b,compareFn){
    const comp=compareFn(a,b);
    return comp===Compare.LESS_THAN || comp===Compare.EQUALS;
}