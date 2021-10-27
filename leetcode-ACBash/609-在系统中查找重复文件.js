/***
 * @creater:ACBash
 * @create_time:21-10-27 16:7:42
 * @last_modify:ACBash
 * @modify_time:21-10-27 17:13:12
 * @line_count:22
 **/

/* API怪|哈希表，确实牛啊，ES6属于是玩明白了 */
const findDuplicate = (paths) => {
    const map = {}, ans = [];

    for(const path of paths){
        const [root, ...files] = path.split(" ");

        for(const file of files){
            const [filename, content] = file.split("(");
            if(content in map){
                ans[map[content]].push(`${root}/${filename}`);
            }else{
                map[content] = ans.push([`${root}/${filename}`]) - 1;
            }
        }
    }

    return ans.filter(arr => arr.length>1);
};

console.log(findDuplicate(["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]));
