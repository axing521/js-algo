/***
 * @creater:ACBash
 * @create_time:21-11-10 12:58:45
 * @last_modify:ACBash
 * @modify_time:21-11-16 16:38:41
 * @line_count:93
 **/

/* LC,DFS,字典树,用数组实现 */
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

/* 2.这个好一点 */
class WordDictionary{
    constructor(){
        this.children = {};
    }

    addWord(word){
        let node = this.children;

        for(const c of word){
            if(!node[c]) node[c] = {"isEnd": false};
            node = node[c];
        }

        node["isEnd"] = true;
    }

    search(word, node = this.children){
        //有点奇怪的是，下面必须这样迭代i，不能const i in word，不然报错
        for(let i=0; i<word.length; i++){
            const c = word[i];
            if(c == "."){ 
                for(const son in node){
                    if(this.search(word.slice(i + 1), node[son])) return true;
                }
                return false;

            }
            if(!node[c]) return false;
            node = node[c];
        }

        return node["isEnd"];
    }
}

/* 有用正则的，下次看看 */