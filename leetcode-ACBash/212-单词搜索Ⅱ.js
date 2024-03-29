/***
 * @creater:ACBash
 * @create_time:21-11-14 14:27:31
 * @last_modify:ACBash
 * @modify_time:21-11-17 11:20:45
 * @line_count:200
 **/

/* 哈希表，坐标数组，DFS */
const findWords = (board, words) => {
    let charMap = {};
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            let pre = charMap[board[i][j]] || [];
            let cur = pre.concat([[i, j]]);
            charMap = {...charMap, [board[i][j]]: cur};
        }
    }
    const isExistsInboard = (word) => {
        let tree = [], visited = {};

        for(const c of word){
            if(!charMap[c]) return false;
            tree.push(charMap[c]);
        }
        const traverse = (preXY, index) => {
            let cacheKey = preXY ? `${preXY[0]}_${preXY[1]}` : "first";
            
            if(visited[cacheKey]) return false;
            visited[cacheKey] = true;

            if(index >= tree.length){
                visited[cacheKey] = false;
                return true;
            }

            let filtered = tree[index].filter(XY => {
                if(!preXY) return true;
                const [x1, y1] = preXY, [x2, y2] = XY;
                return (x1 == x2 && Math.abs(y1 - y2)) == 1 || (y1 == y2 && Math.abs(x1 - x2) == 1);
            })

            if(!filtered.length){
                visited[cacheKey] = false;
                return false;
            }

            let result = filtered.some(XY => traverse(XY, index + 1));
            visited[cacheKey] = false;
            return result;
        };

        return traverse(null, 0);
    };

    return words.filter(word => isExistsInboard(word));
};

/* LC，字典树模板化，把board所有情况插入到字典树中，在字典树中找满足条件的words */
class Trie{
    constructor(board, m, n){
        this.root = {};
        this.m = m;
        this.n = n;
        this.board = board;
        this.set = new Array(m * n).fill(false);
    }

    insert(i, j, dep, node = this.root){
        if(dep == 0) return;
        if(i < 0 || j < 0 || i >= this.m || j >= this.n) return;

        const index = i * this.n + j, c = this.board[i][j];

        if(this.set[index]) return;
        this.set[index] = true;

        node = node[c] = node[c] || {};

        this.insert(i + 1, j, dep - 1, node);
        this.insert(i - 1, j, dep - 1, node);
        this.insert(i, j + 1, dep - 1, node);
        this.insert(i, j - 1, dep - 1, node);

        this.set[index] = false;
    }

    find(word){
        let node = this.root;

        for(const c of word){
            if(!node[c]) return false;
            node = node[c];
        }

        return true;
    }
}

const findWords = (board, words) => {
    const m = board.length, n = board[0].length;
    const maxLen = words.reduce((prev, cur) => Math.max(prev, cur.length), 0);
    let trie = new Trie(board, m, n);
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            trie.insert(i, j, maxLen);
        }
    }

    return words.filter(word => trie.find(word));
};

//写的爽一点
const findWords = (board, words) => {
    const m = board.length, n = board[0].length;
    const maxLen = words.reduce((prev, cur) => Math.max(prev, cur.length), 0);
    let flagBoard = new Array(m * n).fill(false);   //不能用矩阵，只能一维数组，不然报错，为什么？

    const insert = (i, j, dep, node) => {
        if(dep == 0) return;
        if(i < 0 || j < 0 || i >= m || j >= n) return;
        if(flagBoard[i * n + j]) return;
        flagBoard[i * n + j] = true;
        
        const c = board[i][j];
        node = node[c] = node[c] || {};

        insert(i + 1, j, dep - 1, node);
        insert(i - 1, j, dep - 1, node);
        insert(i, j + 1, dep - 1, node);
        insert(i, j - 1, dep - 1, node);

        flagBoard[i * n + j] = false;
    };
    const buildTrie = () => {
        let root = {};
        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                insert(i, j, maxLen, root);
            }
        }
        return root;
    };  //板子的插入不同于之前的words，需要DFS插入所有情况

    let trie = buildTrie();

    const search = (word) => {
        let node = trie;

        for(const c of word){
            if(!node[c]) return false;
            node = node[c];
        }

        return true;
    };

    return words.filter(word => search(word));
};

/* LC, 字典树，把words插到字典树中，在字典树中找board*/
const findWords = (board, words) => {
    const m = board.length, n = board[0].length;
    let ans = [];

    const buildTrie = (words) => {
        let root = {};
        for(const word of words){
            let node = root;
            for(const c of word){
                if(!node[c]) node[c] = {};
                node = node[c];
            }
            node["word"] = word;
        }
        return root;
    };

    let trie = buildTrie(words);

    const search = (node, i, j) => {
        if(node["word"]){
            ans.push(node["word"]);
            node["word"] = null;
        }
        if(i < 0 || j < 0 || i >= m || j >= n) return;

        const c = board[i][j];
        if(!node[c]) return;
        board[i][j] = "#";

        search(node[c], i + 1, j);
        search(node[c], i - 1, j);
        search(node[c], i, j + 1);
        search(node[c], i, j - 1);

        board[i][j] = c;
    };

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            search(trie, i, j);
        }
    }

    return ans;
};