import { Compare, defaultCompare, DOES_NOT_EXIST } from "../util";
import quickSort from "./Sort-quickSort";

export default function binarySearch(arr,value,compareFn=defaultCompare){
    const sortedArr=quickSort(arr);
    let low=0;
    let high=sortedArr.length-1;

    return binarySearchRecursive(sortedArr,value,low,high,compareFn);
}

function binarySearchRecursive(arr,value,low,high,compareFn=defaultCompare){
    if(low<=high){
        const mid=Math.floor((low+high)/2);
        const item=arr[mid];

        if(compareFn(item,value) === Compare.LESS_THAN){
            return binarySearchRecursive(arr,value,mid+1,high,compareFn);
        }else if(compareFn(item,value) === Compare.BIGGER_THAN){
            return binarySearchRecursive(arr,value,low,mid-1,compareFn);
        }else{
            return mid;
        }
    }
    return DOES_NOT_EXIST;
}