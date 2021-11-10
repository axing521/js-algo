/***
 * @creater:ACBash
 * @create_time:21-11-9 21:28:58
 * @last_modify:ACBash
 * @modify_time:21-11-10 12:58:49
 * @line_count:131
 **/

/* LC，350ms */
class Trie{
    constructor(sentences, times){
        this.dictionary = {};
        for(let i = 0, len = sentences.length; i < len; i++) this.insert(sentences[i], times[i]);
    }

    insert(word, time){
        let node = this.dictionary;
        for(const c of word){
            if(!node[c]) node[c] = {"isEnd": false, "word": null, "time": 0};
            node = node[c];
        }
        node["isEnd"] = true;
        node["word"] = word;
        node["time"] += time; 
    }

    search(word){
        let ans = [], node = this.dictionary;
        for(const c of word){
            if(!node[c]) return [];
            node = node[c];
        }

        this.dfs(node, ans);
        
        return ans;
    }

    dfs(node, ans){
        if(node["isEnd"]) ans.push(node);
        for(let p in node){
            if(p != "word" && p != "time" && p != "isEnd") this.dfs(node[p], ans);
        }
    }
}

class AutocompleteSystem{
    constructor(sentences, times){
        this.trie = new Trie(sentences, times);
        this.cur = "";
    }

    input(c){
        if(c == "#"){
            this.trie.insert(this.cur, 1);
            this.cur = "";
            return [];
        }

        this.cur += c;
        let ans = this.trie.search(this.cur);
        return ans.sort((a,b) => {
            if(a.time == b.time){
                return a.word > b.word ? 1 : -1;
            }
            return b.time - a.time
            
        }).map(val => val["word"]).slice(0, 3);
    }
}

/* LC优化:时间略优化300ms，空间大大优化，双100% */
class Trie{
    constructor(sentences, times){
        this.dictionary = {};
        this.curNode = null;
        for(let i = 0, len = sentences.length; i < len; i++) this.insert(sentences[i], times[i]);
    }

    insert(word, time){
        let node = this.dictionary;
        for(const c of word){
            if(!node[c]) node[c] = {"isEnd": false, "word": null, "time": 0};
            node = node[c];
        }
        node["isEnd"] = true;
        node["word"] = word;
        node["time"] += time; 
    }

    dfs(node, ans){
        if(!node) return;
        if(node["isEnd"]) ans.push(node);
        for(let p in node){
            if(p != "word" && p != "time" && p != "isEnd") this.dfs(node[p], ans);
        }
    }
}

class AutocompleteSystem{
    constructor(sentences, times){
        this.trie = new Trie(sentences, times);
        this.cur = "";
        this.flag = true;
    }

    input(c){
        if(c == "#"){
            this.trie.insert(this.cur, 1);
            this.cur = "";
            this.trie.curNode = null;
            this.flag = true;         //表示当前输入在字典树中没有符合的串，你再输入别的也不会有什么东西出来
            return [];
        }

        this.cur += c;
        let ans = [];

        if(!this.flag) return [];
        
        if(!this.trie.curNode){
            this.trie.curNode = this.trie.dictionary[c];
            this.trie.dfs(this.trie.curNode, ans);
            if(!this.trie.curNode) this.flag = false;
        }else{
            this.trie.dfs(this.trie.curNode[c], ans);
            this.trie.curNode = this.trie.curNode[c];
            if(!this.trie.curNode) this.flag = false; 
        }

        return ans.sort((a,b) => {
            if(a.time == b.time){
                return a.word > b.word ? 1 : -1;
            }
            return b.time - a.time
            
        }).map(val => val["word"]).slice(0, 3);
    }
}