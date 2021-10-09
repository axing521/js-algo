import { Compare, defaultCompare } from "../util";

export default function insertionSort(arr,compareFn=defaultCompare){
    const {length}=arr;
    let temp;
    for(let i=1;i<length;i++){
        let j=i;
        temp=arr[i];    //把要插入的项存在temp
        while(j>0 && compareFn(arr[j-1],temp)===Compare.BIGGER_THAN){
            arr[j]=arr[j-1];
            j--;
        }
        arr[j]=temp;    //插在正确位置
    }
    return arr;
};