/***
 * @creater:ACBash
 * @create_time:21-12-16 13:53:37
 * @last_modify:ACBash
 * @modify_time:21-12-16 19:8:24
 * @line_count:102
 **/

/* 作弊解法，看约束条件 */
class Skiplist{
    constructor(){
        this.arr = new Array(20001).fill(0);
    }

    search(target){
        return this.arr[target] > 0;
    }

    add(num){
        this.arr[num]++;
    }

    erase(num){
        if(!this.arr[num]) return false;
        this.arr[num]--;
        return true;
    }
}

/* 跳表 */
const maxLevel = 16;
const power = 2;
const maxRand = power ** maxLevel - 1;
const randLevel = () => maxLevel - parseInt(Math.log2(1 + Math.random() * maxRand) / Math.log2(power));

const SkipNode = function(val){
    this.val = val;
    this.right = null;
    this.down = null;
}

class Skiplist{
    constructor(){
        const left = Array.from({length: maxLevel}, () => new SkipNode(-Infinity));
        const right = Array.from({length: maxLevel}, () => new SkipNode(Infinity));
        
        for(let i = 0; i < maxLevel - 1; i++){
            left[i].right = right[i];
            left[i].down = left[i + 1];
            right[i].down = right[i + 1];
        }
        left[maxLevel - 1].right = right[maxLevel - 1];
        
        this.head = left[0];
    }

    search(target){
        let node = this.head;

        while(node){
            if(node.right.val > target) node = node.down;
            else if(node.right.val < target) node = node.right;
            else return true;
        }

        return false;
    }

    add(num){
        const prev = [];
        let node = this.head;

        while(node){
            if(node.right.val >= num){
                prev.push(node);
                node = node.down;
            }else{
                node = node.right;
            }
        }

        const arr = Array.from({length: randLevel()}, () => new SkipNode(num));
        let t = new SkipNode(NaN);

        for(let i = 0, n = arr.length, j = maxLevel - n; i < n; i++, j++){
            const [a, p] = [arr[i], prev[j]];
            a.right = p.right;
            p.right = a;
            t.down = a;
            t = a;
        }
    }

    erase(num){
        let node = this.head;
        let ans = false;

        while(node){
            if(node.right.val > num) node = node.down;
            else if(node.right.val < num) node = node.right;
            else{
                ans = true;
                node.right = node.right.right;
                node = node.down;
            }
        }

        return ans;
    }
}