/***
 * @creater:ACBash
 * @create_time:21-11-30 16:6:15
 * @last_modify:ACBash
 * @modify_time:22-5-20 16:4:10
 * @line_count:533
 **/

const top = 0;
const parent = i => ((i + 1) >> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
/* A*重构未完成，A*太难了，下次看看 */
class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    peek() {
        return this._heap[top];
    }

    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) this._swap(top, bottom);
        this._heap.pop();
        this._siftDown;
        return poppedValue;
    }

    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }

    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

const minPushBox = (grid) => {
    let TARGET = null, startBlk = null, startPer = null;
    const DIR = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const m = grid.length, n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "S") {
                startPer = [i, j];
                grid[i][j] = ".";
            }
            if (grid[i][j] == "T") {
                TARGET = [i, j];
            }
            if (grid[i][j] == "B") {
                startBlk = [i, j];
                grid[i][j] = ".";
            }
        }
    }

    const manDist = block => {
        let [x, y] = TARGET;
        let [i, j] = block;
        return Math.abs(x - i) + Math.abs(y - j);
    };

    const validMove = (i, j, x = null, y = null) => {
        if (i < 0 || j < 0 || i >= m || j >= n) return false;

        if ((x != null && i == x && y != null && j == y) || grid[i][j] == "#") return false;

        return true;
    };

    const tryPush = (c, b) => {
        let [i, j] = c;
        let [x, y] = b;
        for (let u = 0; u < DIR.length; u++) {
            let [v, w] = DIR[u];
            if ((Math.abs(x - i) == 1 && y == j) || (Math.abs(y - j) == 1 && x == i && validMove(i + v, j + w) && validMove(x + v, y + w) && (i + v) === x && (j + w) === y)) return [v, w];
        }
        return null;
    };

    let queue = new PriorityQueue((a, b) => a.weight < b.weight);
    let states = new Map();

    queue.push({
        "weight": manDist(startBlk),
        "block": startBlk,
        "character": startPer,
        "move": 0
    });

    while (!queue.isEmpty()) {
        let { weight, block, character, move } = queue.pop();
        if (TARGET[0] === block[0] && TARGET[1] === block[1]) {
            return move;
        }
        let key = (block[0] * grid[0].length) + block[1];
        let val = (character[0] * grid[0].length) + character[1];
        if (!states.has(key)) {
            states.set(key, new Set());
        }
        states.get(key).add(val);
        DIR.forEach(d => {
            let i = d[0] + character[0];
            let j = d[1] + character[1];
            let curV = (i * grid[0].length) + j;
            if (validMove(i, j, block[0], block[1]) && !states.get(key).has(curV)) {
                queue.push({ weight: manDist(block) + move, block: block, character: [i, j], move: move });
            }
        });
        let pushDir = tryPush(character, block);
        if (pushDir !== null) {
            let newBlk = [block[0] + pushDir[0], block[1] + pushDir[1]];
            let newCha = [character[0] + pushDir[0], character[1] + pushDir[1]];
            let nBK = (newBlk[0] * grid[0].length) + newBlk[1];
            let nVal = (newCha[0] * grid[0].length) + newCha[1];
            if (!states.has(nBK) || !states.get(nBK).has(nVal)) {
                queue.push({ weight: manDist(newBlk) + (move + 1), block: newBlk, character: newCha, move: move + 1 });
            }
        }
    }

    return -1;
};

/* LCA*原题解 */
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
        this._heap = [];
        this._comparator = comparator;
    }
    size() {
        return this._heap.length;
    }
    isEmpty() {
        return this.size() == 0;
    }
    peek() {
        return this._heap[top];
    }
    push(...values) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }
    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }
    replace(value) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }
    _greater(i, j) {
        return this._comparator(this._heap[i], this._heap[j]);
    }
    _swap(i, j) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }
    _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }
    _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

var minPushBox = function (grid) {
    if (typeof (grid) === 'undefined' || grid === null
        || grid.length === 0 || grid[0].length === 0) {
        return -1;
    }

    let TARGET = null;
    let startBlk = null;
    let startPer = null;
    const DIR = [
        [0, 1], [1, 0], [0, -1], [-1, 0]
    ];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 'S') {
                startPer = [i, j];
                grid[i][j] = '.';
            }
            if (grid[i][j] === 'T') {
                TARGET = [i, j];
            }
            if (grid[i][j] === 'B') {
                startBlk = [i, j];
                grid[i][j] = '.';
            }
        }
    }

    let queue = new PriorityQueue((a, b) => a.weight < b.weight);
    let states = new Map();
    queue.push({ weight: manDist(startBlk), block: startBlk, character: startPer, move: 0 });
    while (!queue.isEmpty()) {
        let { weight, block, character, move } = queue.pop();
        if (TARGET[0] === block[0] && TARGET[1] === block[1]) {
            return move;
        }
        let key = (block[0] * grid[0].length) + block[1];
        let val = (character[0] * grid[0].length) + character[1];
        if (!states.has(key)) {
            states.set(key, new Set());
        }
        states.get(key).add(val);
        DIR.forEach(d => {
            let i = d[0] + character[0];
            let j = d[1] + character[1];
            let curV = (i * grid[0].length) + j;
            if (validMove(i, j, block[0], block[1]) && !states.get(key).has(curV)) {
                queue.push({ weight: manDist(block) + move, block: block, character: [i, j], move: move });
            }
        });
        let pushDir = tryPush(character, block);
        if (pushDir !== null) {
            let newBlk = [block[0] + pushDir[0], block[1] + pushDir[1]];
            let newCha = [character[0] + pushDir[0], character[1] + pushDir[1]];
            let nBK = (newBlk[0] * grid[0].length) + newBlk[1];
            let nVal = (newCha[0] * grid[0].length) + newCha[1];
            if (!states.has(nBK) || !states.get(nBK).has(nVal)) {
                queue.push({ weight: manDist(newBlk) + (move + 1), block: newBlk, character: newCha, move: move + 1 });
            }
        }
    }

    return -1;


    function manDist(block) {
        let [x, y] = TARGET;
        let [i, j] = block;
        return Math.abs(x - i) + Math.abs(y - j);
    }
    function validMove(i, j, x = null, y = null) {
        if (i < 0 || j < 0 || i >= grid.length ||
            j >= grid[0].length) {
            return false;
        }
        if (((x !== null && (i === x)) && (y !== null && (j === y))) || grid[i][j] === '#') {
            return false;
        }
        return true;
    }
    function tryPush(c, b) {
        let [i, j] = c;
        let [x, y] = b;
        for (let u = 0; u < DIR.length; u++) {
            let [v, w] = DIR[u];
            if (((Math.abs(x - i) === 1 && y === j) || (Math.abs(y - j) === 1 && x === i)) && validMove(i + v, j + w) && validMove(x + v, y + w) && (i + v) === x && (j + w) === y) {
                return [v, w];
            }
        }
        return null;
    }
};

/* 双重BFS，下次看看 */
const dirs = [0, 1, 0, -1, 0];
/**
 * @param {character[][]} grid
 * @return {number}
 */
var minPushBox = function (grid) {
    let people;
    let box;
    let target;
    const rows = grid.length;
    const cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'S') {
                people = [i, j];
            } else if (grid[i][j] === 'B') {
                box = [i, j];
            } else if (grid[i][j] === 'T') {
                target = [i, j];
            }
        }
    }

    const visited = new Set();
    const queue = [[people[0], people[1], box[0], box[1]]];
    let queueIndex = 0;
    let steps = 0;
    while (queueIndex < queue.length) {
        const curQueueLen = queue.length;
        let reached = false;
        while (queueIndex < curQueueLen) {
            const [pX, pY, bX, bY] = queue[queueIndex++];
            if (bX === target[0] && bY === target[1]) {
                reached = true;
                break;
            }

            const curKey = `${pX}#${pY}#${bX}#${bY}`;
            if (visited.has(curKey)) continue;
            visited.add(curKey);

            for (let i = 0; i < 4; i++) {
                const pX1 = bX + dirs[i];
                const pY1 = bY + dirs[i + 1];
                if (pX1 < 0 || pX1 >= rows || pY1 < 0 || pY1 >= cols || grid[pX1][pY1] === '#') {
                    continue;
                }

                const bX1 = bX - dirs[i];
                const bY1 = bY - dirs[i + 1];
                if (bX1 < 0 || bX1 >= rows || bY1 < 0 || bY1 >= cols || grid[bX1][bY1] === '#') {
                    continue;
                }

                if (isReachable(grid, [pX1, pY1], [bX, bY], [pX, pY])) {
                    queue.push([bX, bY, bX1, bY1]);
                }
            }
        }

        if (reached) return steps;

        steps++;
    }

    return -1;
};

const isReachable = (grid, target, box, start) => {
    const t = grid[box[0]][box[1]];
    grid[box[0]][box[1]] = '#';
    const queue = [start];
    const visited = new Set();
    visited.add(`${start[0]}#${start[1]}`);

    let i = 0;
    while (i < queue.length) {
        const [curX, curY] = queue[i++];
        if (curX === target[0] && curY === target[1]) {
            grid[box[0]][box[1]] = t;
            return true;
        }

        for (let j = 0; j < 4; j++) {
            const newX = curX + dirs[j];
            const newY = curY + dirs[j + 1];
            const pointStr = `${newX}#${newY}`;
            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length && grid[newX][newY] !== '#' && !visited.has(pointStr)) {
                queue.push([newX, newY]);
                visited.add(pointStr);
            }
        }
    }

    grid[box[0]][box[1]] = t;
    return false;
};

/* 2022-5-20 */
/* 双BFS */
const minPushBox = (grid) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];  //四个[dx,dy]方向
    const m = grid.length, n = grid[0].length;  //网格的行列大小
    let man, box, target;   //人、箱子、目标的位置
    
    //初始化 人、箱子、目标的位置
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == "S"){
                man = [i, j];
            }else if(grid[i][j] == "B"){
                box = [i, j];
            }else if(grid[i][j] == "T"){
                target = [i, j];
            }
        }
    }

    //内层BFS，搜索 人 能否 到达 推的位置
    const isReachable = (boxXY, manXY, newManXY) => {
        const temp = grid[boxXY[0]][boxXY[1]];
        
        grid[boxXY[0]][boxXY[1]] = "#"; //箱子 也是 障碍物

        let queue = [manXY];
        let visited = new Set();
        
        while(queue.length){
            const len = queue.length;

            for(let i = 0; i < len; i++){
                const [curX, curY] = queue.shift();

                if(curX == newManXY[0] && curY == newManXY[1]){
                    grid[boxXY[0]][boxXY[1]] = temp;
                    return true;
                }   //成功

                const man_pos = `${curX} - ${curY}`;
                if(visited.has(man_pos)) continue;
                visited.add(man_pos);

                for(const [dx, dy] of directions){
                    const nextXY = [curX + dx, curY + dy];
                    
                    if(nextXY[0] >= 0 && nextXY[0] < m && nextXY[1] >= 0 && nextXY[1] < n && grid[nextXY[0]][nextXY[1]] != "#"){
                        queue.push(nextXY);
                    }
                }
            }
        }

        //失败
        grid[boxXY[0]][boxXY[1]] = temp;
        return false;
    };

    let visited = new Set();    //记录 人-箱子 的 二维位置
    let queue = [[man, box]];   //人-箱子 待访问队列
    let steps = 0;              //问题的返回值：推了 多少步
    let reached = false;        //判断是否到达 目标位置

    while(queue.length){
        const len = queue.length;

        for(let i = 0; i < len; i++){
            const [manXY, boxXY] = queue.shift();

            if(boxXY[0] == target[0] && boxXY[1] == target[1]){
                reached = true;
                break;
            }

            const man_box_pos = `${manXY[0]} - ${manXY[1]} - ${boxXY[0]} - ${boxXY[1]}`;
            if(visited.has(man_box_pos)) continue;
            visited.add(man_box_pos);

            for(const [dx, dy] of directions){
                const newManXY = [boxXY[0] + dx, boxXY[1] + dy];    //人的 新位置， 我要去 这儿 推箱子！
                
                if(newManXY[0] < 0 || newManXY[0] >= m || newManXY[1] < 0 || newManXY[1] >= n || grid[newManXY[0]][newManXY[1]] == "#"){
                    continue;
                }

                const newBoxXY = [boxXY[0] - dx, boxXY[1] - dy];    //箱子的新位置，被人反方向推动
                
                if(newBoxXY[0] < 0 || newBoxXY[0] >= m || newBoxXY[1] < 0 || newBoxXY[1] >= n || grid[newBoxXY[0]][newBoxXY[1]] == "#"){
                    continue;
                }

                //人-箱子 的新位置都 是 存在的， 但是 人 能不能到达 推的位置 呢？
                if(isReachable(boxXY, manXY, newManXY)){
                    queue.push([boxXY, newBoxXY]);  //新产生的 人-箱子 位置 加入 待访问队列
                }
            }
        }

        if(reached) return steps;
        
        steps++;
    }

    return -1;
};