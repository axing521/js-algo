/***
 * @creater:ACBash
 * @create_time:21-11-15 12:54:57
 * @last_modify:ACBash
 * @modify_time:21-11-16 13:37:58
 * @line_count:186
 **/

/* 暴力法 */
const isPalindrome = (word) => {
    let i = 0, j = word.length - 1;

    while(i < j){
        if(word[i] != word[j]) return false;
        i++;
        j--;
    }

    return true;
};

const palindromePairs = (words) => {
    const len = words.length;
    let ans = [];

    for(let i = 0; i < len - 1; i++){
        for(let j = i + 1; j < len; j++){
            let concat = words[i] + words[j];
            let reconcat = words[j] + words[i];

            if(isPalindrome(concat)) ans.push([i, j]);
            if(isPalindrome(reconcat)) ans.push([j, i]);
        }
    }

    return ans;
};

/* LC,哈希表存储倒序word => index，600ms */
const isPalindrome = (word) => {
    let i = 0, j = word.length - 1;

    while(i < j){
        if(word[i] != word[j]) return false;
        i++;
        j--;
    }

    return true;
};

const palindromePairs = (words) => {
    const len = words.length;
    let map = {}, set = new Set(), ans = [];

    words.forEach((word, index) => {
        const key = [...word].reverse().join("");
        map[key] = index;
    })  //倒序映射

    for(let i = 0; i < len; i++){
        let word = words[i];
        for(let j = 0; j <= word.length; j++){
            let left = word.slice(0, j);
            let right = word.slice(j);

            if(isPalindrome(right) && map[left] != undefined && map[left] != i){
                let w = [i, map[left]];
                let key = w.join();
                if(!set.has(key)){
                    ans.push(w);
                    set.add(key);
                }
            }
            if(isPalindrome(left) && map[right] != undefined && map[right] != i){
                let w = [map[right], i];
                let key = w.join();
                if(!set.has(key)){
                    ans.push(w);
                    set.add(key);
                }
            }
        }
    }

    return ans;
};

/* LC，哈希表，440ms */
const isPalindrome = (word) => {
    let l = 0, r = word.length - 1;

    while(l < r){
        if(word[l++] != word[r--]) return false;
    }

    return true;
};

const palindromePairs = (words) => {
    const len = words.length;
    let reverseds = new Map(), ans = [];

    for(let i = 0; i < len; i++){
        const reversed = [...words[i]].reverse().join("");
        reverseds.set(reversed, i);
    }
    
    for(let i = 0; i < len; i++){
        if(isPalindrome(words[i]) && reverseds.has("") && reverseds.get("") != i){
            ans.push([reverseds.get(""), i]);
        }

        for(let j = 0; j < words[i].length; j++){
            const left = words[i].slice(0, j);
            const right = words[i].slice(j);

            if(isPalindrome(left) && reverseds.has(right) && reverseds.get(right) != i){
                ans.push([reverseds.get(right), i]);
                
            }
            if(isPalindrome(right) && reverseds.has(left) && reverseds.get(left) != i){
                ans.push([i, reverseds.get(left)]);
            
            }
        }
    }

    return ans;
};

/* 构建字典树解法,1700ms */
const isPalindrome = (word) => {
    let l = 0, r = word.length - 1;

    while(l < r){
        if(word[l++] != word[r--]) return false;
    }

    return true;
};

const palindromePairs = (words) => {
    const len = words.length;
    let ans = [];

    const buildTrie = (words) => {
        let root = {};
        for(let i = 0; i < words.length; i++){
            let node = root;
            for(let j = words[i].length - 1; j >= 0; j--){
                if(!node[words[i][j]]) node[words[i][j]] = {"#": undefined};
                node = node[words[i][j]];
            }
            node["#"] = i;
        }
        return root;
    };

    let trie = buildTrie(words);
    
    const search = (word) => {
        let node = trie;

        for(const c of word){
            if(!node[c]) return undefined;
            node = node[c];
        }

        return node["#"];
    };
    
    for(let i = 0; i < len; i++){
        if(isPalindrome(words[i]) && search("") != undefined && search("") != i){
            ans.push([search(""), i]);
        }

        for(let j = 0; j < words[i].length; j++){
            const left = words[i].slice(0, j);
            const right = words[i].slice(j);
            
            if(isPalindrome(left) && search(right) != undefined && search(right) != i){
                ans.push([search(right), i]);
            }
            if(isPalindrome(right) && search(left) != undefined && search(left) != i){
                ans.push([i, search(left)]);
            }
        }
    }

    return ans;
};

console.log(palindromePairs(["abcd","dcba","lls","s","sssll"]));