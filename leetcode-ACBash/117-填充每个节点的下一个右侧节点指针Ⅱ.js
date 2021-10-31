/***
 * @creater:ACBash
 * @create_time:21-10-30 17:29:28
 * @last_modify:ACBash
 * @modify_time:21-10-31 15:33:23
 * @line_count:68
 **/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/* BFS|层序遍历|队列 */
/* 📌注意：题目需要返回填充好的二叉树，而不是遍历序列 */
const connect = (root) => {
    if(!root) return root;
    let queue = [root,null];

    while(queue.length){
        const top = queue.shift();

        if(top){
            top.next = queue[0];
            if(top.left) queue.push(top.left);
            if(top.right) queue.push(top.right);
        }else{ 
            if(queue.length) queue.push(null);
        }
    }

    return root;
};

/* 递归|玩明白&&和|||纯粹装逼用的 */
var connect = function(root) {
    var r = [], dfs = (node, i) => {
        !r[i] && (r[i] = []);
        node.next = r[i][0] || null;
        r[i].unshift(node);
        node.right && dfs(node.right, i + 1);
        node.left && dfs(node.left, i + 1);
    }
    return root && dfs(root, 0) || root;
};

/* O(1)空间？| 关键是利用好next指针，线索二叉树是吧 */
const connect = (root) => {
    let cur = root;

    while(cur){
        let pre = new Node();
        let node = pre;

        while(cur){
            if(cur.left){
                node.next = cur.left;
                node = node.next;
            }
            if(cur.right){
                node.next = cur.right;
                node = node.next;
            }
            cur = cur.next;
        }   //遍历每层
        
        cur = pre.next;
    }

    return root;
};