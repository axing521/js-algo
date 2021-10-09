
export default function knapSack(capacity,weights,values,n){
    const KS=[];
    for(let i=0;i<=n;i++){
        KS[i]=[];                       //构建矩阵
    }

    for(let i=0;i<=n;i++){
        for(let w=0;w<=capacity;w++){
            if(i===0 || w===0){         //忽略第一行和第一列
                KS[i][w] = 0;
            }else if(weights[i-1] <= w){
                const a = values[i-1] + KS[i-1][w-weights[i-1]];
                const b = KS[i-1][w];
                KS[i][w] = a>b ? a : b;
            }else{
                KS[i][w] = KS[i-1][w];
            }
        }
    }
    findValues(n,capacity,KS,weights,values);
    return KS[n][capacity];
}

function findValues(n,capacity,KS,weights,values){
    let i=n;
    let k=capacity;
    console.log("构成解的物品：");
    while(i>0 && k>0){
        if(KS[i][k] !== KS[i-1][k]){
            console.log(`物品${i}可以是解的一部分 w,v：${weights[i-1]},${values[i-1]}`);
            i--;
            k-=KS[i-1][k];
        }else{
            i--;
        }
    }
}

const values=[3,4,5], weights=[2,3,4], capacity=5, n=values.length;
console.log(knapSack(capacity,weights,values,n));