/***
 * @creater:ACBash
 * @create_time:21-11-10 12:58:45
 * @last_modify:ACBash
 * @modify_time:21-11-10 19:58:6
 * @line_count:92
 **/

/* LC,DFS,字典树 */
class TrieNode{
    constructor(){
        this.children = new Array(26).fill(0);
        this.isEnd = false;
    }

    insert(word){
        let node = this;

        for(const c of word){
            const index = c.charCodeAt() - "a".charCodeAt();

            if(node.children[index] == 0){
                node.children[index] = new TrieNode();
            }

            node = node.children[index];
        }

        node.isEnd = true;
    }
}

class WordDictionary{
    constructor(){
        this.trieRoot = new TrieNode();
    }

    addWord(word){
        this.trieRoot.insert(word);
    }

    search(word){
        const dfs = (index, node) => {
            if(index == word.length) return node.isEnd;

            const c = word[index];

            if(c != "."){
                const child = node.children[c.charCodeAt() - "a".charCodeAt()];
                if(child && dfs(index + 1, child)) return true;

            }else{
                for(const child of node.children){
                    if(child && dfs(index + 1, child)) return true;
                }
            }

            return false;
        }

        return dfs(0, this.trieRoot);
    }
}

/* 2. */
class WordDictionary{
    constructor(){
        this.root = Object.create(null);
    }

    addWord(word){
        let node = this.root;
        for(const c of word){
            if(!node[c]) node[c] = {};
            node = node[c];
        }
        node.isEnd = true;
    }

    search(word, node = this.root){
        let c = undefined;
        for(let i=0; i<word.length; i++){
            c = word[i];
            if(c == "."){
                for(const key in node){
                    if(this.search(word.slice(i+1), node[key])){
                        return true;
                    }
                }
                return false;
            }else if(!node[c]){
                return false;
            }
            node = node[c];
        }
        return Boolean(node.isEnd);
    }
}

/* 有用正则的，下次看看 */