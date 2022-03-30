/***
 * @creater:ACBash
 * @create_time:22-3-30 15:48:6
 * @last_modify:ACBash
 * @modify_time:22-3-30 15:48:6
 * @line_count:131
 **/

/* console.log(findAnagrams("cbacdcebabacd","abc")); */
/* 1.自己写的滑动窗口，7000ms */
function deepCopy(obj) {
    var newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return obj;
    } else {
    for (var i in obj) {
      if (typeof obj[i] === 'object'){ //判断对象的这条属性是否为对象
        newobj[i] = deepCopy(obj[i]);  //若是对象进行嵌套调用
      }else{
          newobj[i] = obj[i];
          }
      }
      }
      return newobj; //返回深度克隆后的对象
}

const findAnagrams = (s,t) => {
    let map0 = {}, missingType0 = 0, res = [];

    for(let tChar of t){
        if(!map0[tChar]){
            missingType0++;
            map0[tChar] = 1;
        }else{
            map0[tChar]++;
        }
    }

    let left = 0, right = t.length-1;
    let map1 = deepCopy(map0), missingType1 = missingType0;
    for(let i=left; i<=right; i++){
        if(right>s.length-1) break;

        let char0 = s[i];
        
        if(map1[char0]!==undefined){
            map1[char0]--;
            if(map1[char0]===0){
                missingType1--;
            }
        }else{
            left = i+1;
            right = left + t.length-1;
            map1 = deepCopy(map0), missingType1 = missingType0;
            continue;
        }

        if(missingType1===0){
            res.push(left);
            left++;
            right++;
            i = left - 1;
            map1 = deepCopy(map0), missingType1 = missingType0;
            continue;
        }else if(i===right){
            left++;
            right++;
            i = left - 1;
            map1 = deepCopy(map0), missingType1 = missingType0;
        }
    }

    return res;
};

/* 2.LC,双哈希表 */
const findAnagrams = (s,t) => {
    let win = {}, need = {}, missingType = 0, appearType = 0, res = [];

    for(const tChar of t){
        if(!need[tChar]){
            need[tChar] = win[tChar] = 0;
            missingType++;
        }
        need[tChar]++;
    }

    for(let right=0; right<s.length; right++){
        let left = right - t.length;

        if(need[s[right]] && ++win[s[right]]===need[s[right]]) appearType++;
        if(need[s[left]] && win[s[left]]--===need[s[left]]) appearType--;
        if(appearType === missingType) res.push(left+1);
    }

    return res;
}

const findAnagrams = (s, t) => {
    let slow = 0, ans = [];
    let map = {}, cNum = 0;

    for(const c of t){
        if(!map[c]){
            map[c] = 0;
            cNum++;
        }
        map[c]++;
    }

    for(let i = 0; i < t.length; i++){
        if(map[s[i]] != undefined){
            map[s[i]]--;            
            if(map[s[i]] == 0) cNum--;
            if(cNum == 0) ans.push(0);
        }
    }
    
    for(let fast = t.length; fast < s.length; fast++, slow++){
        if(s[fast] == s[slow]){
            cNum == 0 && ans.push(slow + 1);
            continue;
        }

        if(map[s[fast]] != undefined){
            map[s[fast]]--;
            map[s[fast]] == 0 && cNum--;
        }

        if(map[s[slow]] != undefined){
            map[s[slow]]++;
            map[s[slow]] == 1 && cNum++;
        }

        cNum == 0 && ans.push(slow + 1);
    }

    return ans;
};