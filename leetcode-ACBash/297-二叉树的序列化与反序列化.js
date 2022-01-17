/***
 * @creater:ACBash
 * @create_time:22-1-16 23:53:4
 * @last_modify:ACBash
 * @modify_time:22-1-17 17:54:59
 * @line_count:78
 **/

/* 此题与剑指37为同一题 */
/* BFS */
const serialize = (root) => {
    let ans = [], queue = [root];

    while(queue.length){
        const top = queue.shift();

        if(top){
            ans.push(top.val);
            queue.push(top.left);
            queue.push(top.right);
        }else{
            ans.push("x");
        }
    }

    return ans.join(",");
};

const deserialize = (data) => {
    if(data == "x") return null;

    const list = data.split(",");
    let root = new TreeNode(list[0]);
    let queue = [root], cursor = 1;

    while(cursor < list.length){
        const top = queue.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];

        if(leftVal != "x"){
            const leftNode = new TreeNode(leftVal);
            top.left = leftNode;
            queue.push(leftNode);
        }

        if(rightVal != "x"){
            const rightNode = new TreeNode(rightVal);
            top.right = rightNode;
            queue.push(rightNode);
        }

        cursor += 2;
    }

    return root;
};

/* DFS */
const serialize = (root) => {
    if(!root) return "x";

    const left = serialize(root.left);
    const right = serialize(root.right);

    return root.val + "," + left + "," + right;
};

const deserialize = (data) => {
    if(data == "x") return null;

    let list = data.split(",");

    const buildTree = (list) => {
        const rootVal = list.shift();
        if(rootVal == "x") return null;

        const root = new TreeNode(rootVal);
        root.left = buildTree(list);
        root.right = buildTree(list);

        return root;
    };

    return buildTree(list);
};