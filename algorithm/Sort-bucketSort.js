import insertionSort from "./Sort-insertionSort";
//bucketSize -> 桶内最多可装元素个数，bucketCount -> 桶子个数
export default function bucketSort(arr,bucketSize=5){   //if元素稀疏，那么桶越多越好，if元素密集，那么桶少比较好，所以自己传参bucketSize
    if(arr.length<2){
        return arr;
    }
    const buckets=createBuckets(arr,bucketSize);
    return sortBuckets(buckets);
}

export function createBuckets(arr,bucketSize){
    let minValue=arr[0];
    let maxValue=arr[0];
    for(let i=1;i<arr.length;i++){                      //挑出arr中的max和min
        if(arr[i]<minValue){
            minValue=arr[i];
        }else if(arr[i]>maxValue){
            maxValue=arr[i];
        }
    }
    const bucketCount=Math.floor((maxValue-minValue)/bucketSize) + 1;
    const buckets=[];
    for(let i=0;i<bucketCount;i++){
        buckets[i]=[];
    }
    for(let i=0;i<arr.length;i++){
        const bucketIndex=Math.floor((arr[i]-minValue)/bucketSize);
        buckets[bucketIndex].push(arr[i]);
    }
    return buckets;
}

export function sortBuckets(buckets){
    const sortedArr=[];
    for(let i=0;i<buckets.length;i++){
        if(buckets[i]!=null){
            insertionSort(buckets[i]);                   //对每个桶子进行插入排序
            sortedArr.push(...buckets[i]);               //将排好序的桶子按序压入sortedArr
        }
    }
    return sortedArr;
}