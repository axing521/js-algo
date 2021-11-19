import { swap } from "../util";

export default function shuffle(arr){
    for(let i=arr.length-1;i>0;i--){
        const randomIndex=Math.floor((i+1)*Math.random());
        swap(arr,i,randomIndex);
    }
    return arr;
}