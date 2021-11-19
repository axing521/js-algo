import { defaultEquals } from "../util";

const DOES_NOT_EXIST=-1;

export default function sequentialSearch(arr,value,equalsFn=defaultEquals){
    for(let i=0;i<arr.length;i++){
        if(equalsFn(value,arr[i])){
            return i;
        }
    }
    return DOES_NOT_EXIST;
}