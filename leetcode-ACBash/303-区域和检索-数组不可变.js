/***
 * @creater:ACBash
 * @create_time:21-10-11 15:13:8
 * @last_modify:ACBash
 * @modify_time:21-10-11 16:20:14
 * @line_count:85
 **/

/* 1.不解释连招，700ms */
class NumArray{
    constructor(nums){
        this.nums = nums;
    }

    sumRange(left,right){
        const nums = this.nums;
        const win = nums.slice(left,right+1);
        return win.reduce((prev,cur) => prev+cur);
    }
}

/* 2.写个记录前缀和的hash表，空间换时间，180ms */
class NumArray{
    constructor(nums){
        this.nums = nums;
        this.pre = new Array(nums.length).fill(undefined);
    }

    atMostK(k,nums){
        if(k === -1) return 0;
        if(this.pre[k] === undefined){
            this.pre[k] = 0;
            for(let i=0; i<=k; i++){
                this.pre[k] += nums[i];
            }
            return this.pre[k];
        } 
        return this.pre[k];
    }

    sumRange(left,right){
        const nums = this.nums;
        
        return this.atMostK(right, nums) - this.atMostK(left-1, nums);
    }
}

/* 3.差分前缀和，100ms */
class NumArray{
    constructor(nums){
        this.nums = nums;
        this.pre = new Array(nums.length).fill(undefined);
    }

    atMostK(k,nums){
        if(k === -1) return 0;
        if(this.pre[k] === undefined){
            this.pre[k] = nums[k];
            let j = k-1;
            while(this.pre[j] === undefined  &&  j >= 0){
                this.pre[k] += nums[j];
                j--;
            }
            if(j >= 0) this.pre[k] += this.pre[j];
            return this.pre[k];
        } 
        return this.pre[k];
    }

    sumRange(left,right){
        const nums = this.nums;    
        return this.atMostK(right, nums) - this.atMostK(left-1, nums);
    }
}

/* 4.LC：一口气前缀和全搞定，100ms，时间略优3，空间完胜3，3相当于是渐进式的前缀和表 */
class NumArray{
    constructor(nums){
        const len = nums.length;
        this.pre = new Array(len).fill(0);
        for(let i=0; i<len; i++){
            if(i === 0) this.pre[i] = nums[i];
            else this.pre[i] = this.pre[i-1] + nums[i];
        }
    }

    sumRange(left,right){
        return left===0 ? this.pre[right] : this.pre[right] - this.pre[left-1];
    }
}

let a = new NumArray([-2,0,3,-5,2,-1]);
console.log(a.sumRange(2,5));