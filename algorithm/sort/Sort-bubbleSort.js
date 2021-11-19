import { Compare, defaultCompare, swap } from "../util";

export default function bubbleSort(arr,compareFn=defaultCompare){
    const {length}=arr;
    for(let i=0;i<length;i++){  //可以用while优化
        for(let j=0;j<length-1;j++){    //可以-i优化
            if(compareFn(arr[j],arr[j+1]) === Compare.BIGGER_THAN){
                swap(arr,j,j+1);
            }
        }
    }
    return arr;
}