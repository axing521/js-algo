import { Compare, defaultCompare } from "../util";

export function merge(left,right,compareFn){
    let i=0,j=0;
    const result=[];
    while(i<left.length && j<right.length){
        result.push(compareFn(left[i],right[j])===Compare.LESS_THAN ? left[i++] : right[j++]);
    }
    return result.concat(i<left.length ? left.slice(i) : right.slice(j));
}

export default function mergeSort(arr,compareFn=defaultCompare){
    const {length}=arr;
    if(length>1){
        const middle=Math.floor(length/2);
        const left=mergeSort(arr.slice(0,middle),compareFn);    //二分法,拆到一个单元的数组为止
        const right=mergeSort(arr.slice(middle,length),compareFn);
        arr=merge(left,right,compareFn);
    }
    return arr;
}