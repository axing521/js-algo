/* console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4])); */
/* 自己写的，150ms */
const totalFruit = (fruits) => {
    let left = 0, fruitBox = new Map(), len = 0, fruitType = 0;

    for(let right=0; right<fruits.length; right++){
        let curFruit = fruits[right]; 
        
        if(!fruitBox[curFruit]){
            fruitBox[curFruit] = 1;
            fruitType++;
        }else{
            fruitBox[curFruit]++;
        }

        while(fruitType > 2){
            if(len===0 || len<right-left){
                len = right - left;
            }
            let leftFruit = fruits[left++];
            if(--fruitBox[leftFruit] === 0) fruitType--;
        }

        if(len===0 || len<right-left+1){
            len = right - left + 1;
        }
    }

    return len;
};

