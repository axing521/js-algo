//这个有点难理解
export default function radixSort(arr,radixBase=10){
    if(arr.length<2){
        return arr;
    }
    let minValue=arr[0];
    let maxValue=arr[0];
    for(let i=1;i<arr.length;i++){                      //挑出arr中的max和min
        if(arr[i]<minValue){
            minValue=arr[i];
        }else if(arr[i]>maxValue){
            maxValue=arr[i];
        }
    }

    let significantDigit=1;
    while((maxValue-minValue)/significantDigit >= 1){
        arr=countingSortForRadix(arr,radixBase,significantDigit,minValue);
        significantDigit *= radixBase;
    }
    return arr;
}

export function countingSortForRadix(arr,radixBase,significantDigit,minValue){
    let bucketsIndex;
    const buckets=[];
    const aux=[];
    for(let i=0;i<radixBase;i++){
        buckets[i]=0;
    }
    for(let i=0;i<arr.length;i++){
        bucketsIndex=Math.floor((arr[i]-minValue)/significantDigit % radixBase);
        buckets[bucketsIndex]++;
    }
    for(let i=1;i<radixBase;i++){               //好好想想这一步是干嘛
        buckets[i] += buckets[i-1];
    }
    for(let i=arr.length-1;i>=0;i--){
        bucketsIndex=Math.floor((arr[i]-minValue)/significantDigit % radixBase);
        aux[--buckets[bucketsIndex]] = arr[i];
    }
    for(let i=0;i<arr.length;i++){
        arr[i]=aux[i];
    }
    return arr;
}

let arr0=[456,789,123,1,32,4,243,321,42,90,10,999,1024];
console.log(radixSort(arr0));