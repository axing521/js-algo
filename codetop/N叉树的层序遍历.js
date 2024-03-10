// root是序列化输入：[1,null,3,2,4,null,5,6]，层之间用null分割
// bfs队列

const func1 = (root) => {
    if(!root) return [];

    let ans = [], queue = [root];

    while(queue.length){
        const len  = queue.length;
        let levelNodes = [];

        for(let i = 0; i < len; i++){
            const top = queue.shift();
            levelNodes.push(top.val);
            
            for(const child of top.children){
                queue.push(child);
            }
        }

        ans.push(levelNodes);
    }

    return ans;
};