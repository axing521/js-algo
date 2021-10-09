
export default function countingSort(arr){
    if(arr.length<2){
        return arr;
    }
    const maxValue=findMaxValue(arr);
    const counts=new Array(maxValue+1);
    
    arr.forEach(item=>{                         //给arr做一个计数数组,计数数组的索引是arr的值，值是arr值出现次数
        if(!counts[item]){
            counts[item]=0;
        }
        counts[item]++;
    });

    let sortedIndex=0;
    counts.forEach((count,i)=>{
        while(count>0){
            arr[sortedIndex++]=i;
            count--;
        }
    });
    return arr;
}

export function findMaxValue(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

/* let arr=[5,4,3,2,3,1];
console.log(countingSort(arr)); */