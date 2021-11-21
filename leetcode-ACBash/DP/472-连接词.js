/***
 * @creater:ACBash
 * @create_time:21-11-21 14:19:46
 * @last_modify:ACBash
 * @modify_time:21-11-21 18:31:50
 * @line_count:162
 **/

/* 草，有用例会超时 */
const findAllConcatenatedWordsInADict = (words) => {
    const buildTrie = (words) => {
        let root = {};

        for(const word of words){
            let node = root;

            for(const c of word){
                if(!node[c]) node[c] = {"isEnd": false};
                node = node[c];
            }

            node["isEnd"] = true;
        }

        return root;
    };

    const trie = buildTrie(words);
    
    const search = (word, degree = 0) => {
        const len = word.length;
        let node = trie;

        for(let i = 0; i < len; i++){
            const c = word[i];
            
            if(!node[c]) return false;
            
            if(node[c]["isEnd"]){
                if(i == len - 1 && degree >= 1) return true;
                if(search(word.slice(i + 1), degree + 1)) return true;
            }
            node = node[c];
        }

        return node["isEnd"] && degree >= 2;
    };
    
    return words.filter(word => search(word));
};

/* Lucifer,也会超时 */
class Trie{
    constructor(){
        this.children = {};
        this.visited = {};
    }

    insert(word){
        let node = this.children;

        for(const c of word){
            if(!node[c]) node[c] = {};
            node = node[c];
        }

        node["#"] = 1;
    }

    countWords(word){
        let node = this.children, ans = -Infinity;

        if(!word) return 0;

        if(this.visited[word] != undefined) return this.visited[word];

        for(let i = 0; i < word.length; i++){
            const c = word[i];

            if(!node[c]) return ans;
            node = node[c];

            if(node["#"]) ans = Math.max(ans, 1 + this.countWords(word.slice(i + 1)));
        }

        this.visited[word] = ans;

        return ans;
    }
}

const findAllConcatenatedWordsInADict = (words) => {
    let trie = new Trie(), ans = [];

    for(const word of words){
        trie.insert(word);
    }

    for(const word of words){
        if(trie.countWords(word) >= 2) ans.push(word);
    }

    return ans;
};

/* LC,属于是把set玩明白了,dfs */
const findAllConcatenatedWordsInADict = (words) => {
    let set = new Set(), ans = [];

    const getWord = (word, start) => {
        for(let str = "", len = word.length; start < len; start++){
            str += word[start];

            if(set.has(str) && (start == len - 1 || getWord(word, start + 1))){
                return true;              
            }
        }

        return false;
    };

    words.sort((a, b) => a.length - b.length);

    set.add(words[0]);

    for(let i = 1, len = words.length; i < len; i++){
        if(getWord(words[i], 0)) ans.push(words[i]);
        else set.add(words[i]);
    }

    return ans;
};

/* LC,DP */
const exists = (word, wordSet) => {
    const len = word.length;
    const dp = new Array(len).fill(false);

    for(let i = 0, str = ""; i < len; i++){
        str += word[i];

        if(wordSet.has(str)){
            dp[i] = true;
            continue;
        }

        for(let j = 0; j < i; j++){
            if(dp[j] && wordSet.has(word.slice(j + 1, i + 1))){
                dp[i] = true;
                break;
            }
        }   //这里很关键
    }

    return dp[len - 1];
};

const findAllConcatenatedWordsInADict = (words) => {
    const wordSet = new Set();
    let ans = [];

    words.sort((a, b) => a.length - b.length);

    for(const word of words){
        if(exists(word, wordSet)) ans.push(word);
        wordSet.add(word);
    }

    return ans;
};