import { Compare, defaultCompare, swap } from "../util";

export default function selectionSort(arr,compareFn=defaultCompare){
    const {length}=arr;
    let indexMin;
    for(let i=0;i<length-1;i++){
        indexMin=i;
        for(let j=i;j<length;j++){
            if(compareFn(arr[indexMin],arr[j]) === Compare.BIGGER_THAN){
                indexMin=j;
            }
        }
        if(i!==indexMin){
            swap(arr,i,indexMin);
        }
    }
    return arr;
}