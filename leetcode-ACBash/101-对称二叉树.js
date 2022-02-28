/***
 * @creater:ACBash
 * @create_time:22-2-22 15:10:5
 * @last_modify:ACBash
 * @modify_time:22-2-28 17:49:15
 * @line_count:71
 **/

/* 递归 */
const isSymmetric = (root) => {
    if(!root) return true;
    
    const dfs = (left, right) => {
        if(!left && !right) return true;

        if(left && right && left.val == right.val && dfs(left.left, right.right) && dfs(left.right, right.left)) return true;

        return false;
    };

    return dfs(root.left, root.right);
};

/* 迭代，BFS */
const isSymmetric = (root) => {
    if(!root) return true;

    let queue = [root.left, root.right];

    while(queue.length){
        const levelSize = queue.length;

        for(let i = 0; i < levelSize; i += 2){
            const left = queue.pop();
            const right = queue.pop();

            if((left && !right) || (!left && right)) return false;

            if(left && right){
                if(left.val != right.val) return false;
                queue.push(left.left, right.right);
                queue.push(left.right, right.left);
            }
        }
    }

    return true;
};

/* 迭代，栈模拟 */
const isSymmetric = (root) => {
    if(!root) return true;

    let leftStack = [], rightStack = [];
    let curLeft = root.left, curRight = root.right;

    while(curLeft || curRight || leftStack.length || rightStack.length){
        while(curLeft){
            leftStack.push(curLeft);
            curLeft = curLeft.left;
        }
        while(curRight){
            rightStack.push(curRight);
            curRight = curRight.right;
        }

        if(leftStack.length != rightStack.length) return false;

        curLeft = leftStack.pop();
        curRight = rightStack.pop();

        if(curLeft.val != curRight.val) return false;

        curLeft = curLeft.right;
        curRight = curRight.left;
    }

    return true;
};