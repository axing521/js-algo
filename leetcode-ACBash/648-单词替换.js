/***
 * @creater:ACBash
 * @create_time:21-11-8 20:46:53
 * @last_modify:ACBash
 * @modify_time:21-11-16 15:8:36
 * @line_count:162
 **/

/* 四种解法，比较好的是“API怪”和“字典树思想” */
/* 暴力法，API怪，你还别说，api还真就是爹，84ms */
const replaceWords = (dictionary, sentence) => {
    const words = sentence.split(" ");

    const search = (word) => {
        let min = Infinity, ans = word;

        for(const root of dictionary){
            if(root.length < min && word.startsWith(root)){
                ans = root;
                min = root.length;
            }
        }

        return ans;
    };

    return words.map(word => search(word)).join(" ");
};

/* 字典树模板化，150ms，因为对每个单词都构造字典树，优化思路可以从复用字典树入手 */
class Trie{
    constructor(){
        this.dictionary = {};
    }

    insert(word){
        let node = this.dictionary;

        for(const c of word){
            if(!node[c]) node[c] = {"isEnd": false};
            node = node[c];
        }

        node["isEnd"] = true;
    }

    search(word){
        let node = this.dictionary;

        for(const c of word){
            if(!node[c]) return false;
            node = node[c];
        }

        return node["isEnd"];
    }

    startsWith(prefix){
        let node = this.dictionary;

        for(const c of prefix){
            if(!node[c]) return false;
            node = node[c];
        }

        return true;
    }
}

const shortestRoot = (word, dictionary) => {
    let shortest = Infinity, ans = word, trie = new Trie();
    trie.insert(word);

    for(const root of dictionary){
        if(root.length < shortest && trie.startsWith(root)){
            ans = root;
            shortest = root.length;
        }
    }

    return ans;
};

const replaceWords = (dictionary, sentence) => {
    const words = sentence.split(" ");

    const replaced = words.map(val => shortestRoot(val, dictionary));

    const ans = replaced.join(" ");
    
    return ans;
};

/* 字典树思想 */
const replaceWords = (dictionary, sentence) => {
    const buildTrie = (dictionary) => {
        let root = {};

        for(const word of dictionary){
            let node = root;

            for(const c of word){
                if(!node[c]) node[c] = {"isEnd": false};
                node = node[c];
            }

            node["isEnd"] = true;
            node["word"] = word;
        }

        return root;
    };

    let trie = buildTrie(dictionary);

    const search = (word) => {
        let node = trie;

        for(const c of word){
            if(!node[c]) return word;
            if(node[c]["isEnd"]) return node[c]["word"];
            node = node[c];
        }

        return word;
    };

    const words = sentence.split(" ");

    return words.map(word => search(word)).join(" ");
};

/* LC,相当于精简上面的做法 */
class Trie{
    constructor(){
        this.dictionary = {};
    }

    insert(word){
        let node = this.dictionary;

        for(const c of word){
            if(!node[c]) node[c] = {"isEnd": false, "word": word};
            node = node[c];
        }

        node["isEnd"] = true;
        node["word"] = word;
    }

    search(word){
        let node = this.dictionary;

        for(const c of word){
            if(!node[c]) return word;
            else if(!node[c]["isEnd"]) node = node[c];
            else return node[c]["word"];
        }

        return word;
    }
}

const replaceWords = (dictionary, sentence) => {
    let trie = new Trie();

    for(const root of dictionary) trie.insert(root);

    return sentence.split(" ").map(word => trie.search(word)).join(" ");
};