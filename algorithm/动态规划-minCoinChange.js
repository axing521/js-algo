
export default function minCoinChange(coins,amount){
    const cache=[];
    const makeChange= value => {
        if(value<=0){
            return [];
        }
        if(cache[value]){                   //有没有36，有直接36，记忆化技巧
            return cache[value];
        }
        let min=[];
        let newMin;
        let newAmount;
        for(let i=0;i<coins.length;i++){
            const coin=coins[i];    
            newAmount=value-coin;           //踢一个硬币出去,看看剩余的怎么说
            if(newAmount>=0){
                newMin=makeChange(newAmount);   
            }
            if(newAmount>=0 && (newMin.length<min.length-1 || !min.length) && (newMin.length || !newAmount)){
                min=[coin].concat(newMin);
                console.log("newMin "+min+" for "+value);
            }
        }
        return (cache[value]=min);
    };
    return makeChange(amount);
}

/* console.log(minCoinChange([1,5,10,25],36)); */