/***
 * @creater:ACBash
 * @create_time:22-5-23 11:47:11
 * @last_modify:ACBash
 * @modify_time:22-5-23 17:29:48
 * @line_count:93
 **/

/* 模拟，通过，3000ms */
const robotSim = (commands, obstacles) => { 
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let direction = directions[0];
    let ans = 0;
    let pos = [0, 0];

    //obstacles处理
    let deny = obstacles.map((obstacle) => `${obstacle[0]} -- ${obstacle[1]}`);

    for(const obstacle of obstacles){
        
    }

    for(const command of commands){
        if(command == -2){
            switch(direction){
                default: console.log(false);
                case directions[0] : direction = directions[3]; break;
                case directions[1] : direction = directions[2]; break;
                case directions[2] : direction = directions[0]; break;
                case directions[3] : direction = directions[1]; break;
            }

            continue;
        }

        if(command == -1){
            switch(direction){
                default: console.log(false);
                case directions[0] : direction = directions[2]; break;
                case directions[1] : direction = directions[3]; break;
                case directions[2] : direction = directions[1]; break;
                case directions[3] : direction = directions[0]; break;
            }

            continue;
        }

        for(let i = 1; i <= command; i++){
            let nextPos = `${pos[0] + direction[0]} -- ${pos[1] + direction[1]}`;

            if(deny.includes(nextPos)){
                break;
            }
            
            pos[0] += direction[0];
            pos[1] += direction[1];
        }

        ans = Math.max(ans, pos[0] ** 2 + pos[1] ** 2);
    }

    return ans;
};

/* 利用Map和循环队列，性能好 */
const robotSim = (commands, obstacles) => {
    let obs = new Map();
    
    for(const [x, y] of obstacles){
        if(!obs.has(x)) obs.set(x, new Set());

        obs.get(x).add(y);
    }

    const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];  //U, L, D, R
    let dir = 0;
    let cur = [0, 0];
    let ans = 0;

    for(const c of commands){
        if(c == -2) dir++;
        else if(c == -1) dir--;

        dir = (dir + 4) % 4;

        if(c >= 1 && c <= 9){
            for(let i = 0; i < c; i++){
                let [nextX, nextY] = [cur[0] + directions[dir][0], cur[1] + directions[dir][1]];

                if(obs.has(nextX) && obs.get(nextX).has(nextY)) break;

                cur[0] += directions[dir][0];
                cur[1] += directions[dir][1];
            }

            ans = Math.max(ans, cur[0] ** 2 + cur[1] ** 2);
        }
    }

    return ans;
};