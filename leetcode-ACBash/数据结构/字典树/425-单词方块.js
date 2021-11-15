/***
 * @creater:ACBash
 * @create_time:21-11-14 17:8:1
 * @last_modify:ACBash
 * @modify_time:21-11-15 12:55:1
 * @line_count:88
 **/

/* LC,哈希表，DFS */
const wordSquares = (words) => {
    const prefixMaps = {};

    for(const word of words){
        let prefix = "";
        for(const c of word){
            prefix += c;
            if(!prefixMaps[prefix]) prefixMaps[prefix] = [];
            prefixMaps[prefix].push(word);
        }
    }

    const mustBeginWith = layers => layers.map(layer => layer[layers.length]).join("");
    const ans = [];
    const search = (layers = [], cdds = words) => {
        if(layers.length == words[0].length) ans.push(layers);
        for(const cdd of cdds){
            search([...layers, cdd], prefixMaps[mustBeginWith([...layers, cdd])] || []);    
        }
    }

    search();

    return ans;
};

/* 字典树 */
const wordSquares = (words) => {
    const n = words[0].length;
    let results = [], squares = [];

    const buildTrie = (words) => {
        let root = {};

        for(let i = 0; i < words.length; i++){
            let node = root;

            for(const c of words[i]){
                if(!node[c]) node[c] = {"#": []};
                node = node[c];
                node["#"].push(i);  //?
            }
        }

        return root;
    };

    let trie = buildTrie(words);

    const getWordsWithPrefix = (prefix) => {
        let node = trie;
        for(const c of prefix){
            if(!node[c]) return [];
            node = node[c];
        }
        let ret = [];
        for(const index of node["#"]){
            ret.push(words[index]);
        }
        
        return ret;
    };

    const backtracking = (step, squares) => {
        if(step == n){
            results.push([...squares]); 
            return;
        }

        let prefix = squares.map(word => word[step]).join("");
        let cdds = getWordsWithPrefix(prefix);

        for(const cdd of cdds){
            squares.push(cdd);
            backtracking(step + 1, squares);
            squares.pop();
        }
        
    };

    for(const word of words){
        squares = [word];
        backtracking(1, squares);
    }

    return results;
};