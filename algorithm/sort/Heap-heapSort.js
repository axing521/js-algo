import { defaultCompare, swap } from "../util.js";

export function buildMaxHeap(arr,compareFn){
    for(let i=Math.floor(arr.length/2);i>=0;i--){
        heapify(arr,i,arr.length,compareFn);
    }
    return arr;
};

export function heapify(array, index, heapSize, compareFn) {
    let largest = index;
    const left = (2 * index) + 1;
    const right = (2 * index) + 2;
    if (left < heapSize && compareFn(array[left], array[index]) > 0) {
      largest = left;
    }
    if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
      largest = right;
    }
    if (largest !== index) {
      swap(array, index, largest);
      heapify(array, largest, heapSize, compareFn);
    }
}

export default function heapSort(arr,compareFn=defaultCompare){
    let heapSize=arr.length;
    buildMaxHeap(arr,compareFn);
    while(heapSize>1){
        swap(arr,0,--heapSize);
        heapify(arr,0,heapSize,compareFn);
    }
    return arr;
}