import { Compare, defaultCompare, swap } from "../util.js";

export function partition(arr,left,right,compareFn){
    const pivot=arr[Math.floor( (right+left)/2 )];                  //主元=左右指针中间那个
    let i=left,j=right;                                             //按值传参，copy一份左右指针

    while(i<=j){                                                    //当左指针没有超过右指针时
        while(compareFn(arr[i],pivot) === Compare.LESS_THAN){       //当左指针指的东西小于主元时，往右移动
            i++;
        }                                                           //跳出，左指针：hey，我发现了一个大于主元的家伙
        while(compareFn(arr[j],pivot) === Compare.BIGGER_THAN){     //当右指针指的东西大于主元时，往左移动
            j--;
        }                                                           //跳出，右指针：hey，我也发现了一个小于主元的家伙
        if(i<=j){                                                   
            swap(arr,i,j);                                          //那么来交换一下这两个家伙
            i++;
            j--;
        }
    }
    return i;
}

export function quick(arr,left,right,compareFn=defaultCompare){
    let index;
    const {length}=arr;
    if(length>1){
        index=partition(arr,left,right,compareFn);                  //左右指针
        if(left<index-1){
            quick(arr,left,index-1,compareFn);
        }
        if(index<right){
            quick(arr,index,right,compareFn);
        }
    }
    return arr;
};

export default function quickSort(arr,compareFn=defaultCompare){    //外部封装，只暴露arr，compareFn
    return quick(arr,0,arr.length-1,compareFn);
};

/* let arr=[3,5,1,6,4,7,2];
quickSort(arr);
console.log(arr); */