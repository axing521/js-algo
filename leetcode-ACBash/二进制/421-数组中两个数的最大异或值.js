/***
 * @creater:ACBash
 * @create_time:21-11-10 19:58:4
 * @last_modify:ACBash
 * @modify_time:21-11-11 15:3:21
 * @line_count:148
 **/

/* LC-哈希 */
const findMaximumXOR = (nums) => {
    const HIGH_BIT = 30;
    let x = 0;  //最大异或值，最小是自身异或为0

    for(let k = HIGH_BIT; k >= 0; k--){
        const seen = new Set();

        for(const num of nums){ //seen存储pre[k](ai);
            seen.add(num >> k);
        }

        const xNext = x * 2 + 1;   //判断第k位为1还是0
        let found = false;  //标志是否有 pre[k](X) = pre[k](ai) ^ pre[k](aj);

        for(const num of nums){
            if(seen.has(xNext ^ (num >> k))){   //这个地方是否可以字典树优化？
                found = true;
                break;
            }
        }

        if(found) x = xNext;
        else x = xNext - 1;
    }

    return x;
};

/* 字典树 */
class TrieNode{
    constructor(val, left, right){
        this.val = val ? val : undefined;
        this.left = left ? left : null;  //表示0节点
        this.right = right ? right : null;    //表示1节点
    }
}

const findMaximumXOR = (nums) => {
    let trieRoot = new TrieNode(), HIGH_BIT = 30;

    const add = (num) => {
        let node = trieRoot;

        for(let k = HIGH_BIT; k >= 0; k--){
            let bit = (num >> k) & 1;

            if(bit == 0){
                if(!node.left) node.left = new TrieNode();
                node = node.left;
            }else{
                if(!node.right) node.right = new TrieNode();
                node = node.right;
            }
        }
    };

    const check = (num) => {
        let node = trieRoot, x = 0;

        for(let k = HIGH_BIT; k >= 0; k--){
            let bit = (num >> k) & 1;

            if(bit == 0){
                if(node.right){
                    node = node.right;
                    x = x * 2 + 1;
                }else{
                    node = node.left;
                    x = x * 2;
                }
            }else{
                if(node.left){
                    node = node.left;
                    x = x * 2 + 1;
                }else{
                    node = node.right;
                    x = x * 2;
                }
            }
        }

        return x;
    };

    let x = 0;

    for(let i = 1; i < nums.length; i++){
        add(nums[i - 1]);

        x = Math.max(x, check(nums[i]));
    }

    return x;
};

/* LC2 */
class Trie{
    constructor(){
        this.head = [];
    }

    add(num){
        let node = this.head;

        for(let move = 31; move >= 0; move--){
            let path = this.path(num, move);
            node[path] = node[path] === undefined ? [] : node[path];
            node = node[path];
        }
    }

    maxXor(num){
        let node = this.head;
        let res = 0;

        for(let move = 31; move >= 0; move--){
            let path = this.path(num, move);

            let wantPath = move === 31 ? path : path ^ 1;

            wantPath = node[wantPath] !== undefined ? wantPath : wantPath ^ 1;
            res |= ((path ^ wantPath) << move);
            node = node[wantPath];
        }

        return res;
    }

    path(num, move){
        return (num >> move) & 1;
    }
}

const findMaximumXOR = (nums) => {
    if(nums.length <= 1) return 0;
    
    let max = -Infinity, trie = new Trie();

    for(const num of nums){
        trie.add(num);

        max = Math.max(max, trie.maxXor(num));
    }

    return max;
}
/* console.log(findMaximumXOR([3,10,5,25,2,8])); */