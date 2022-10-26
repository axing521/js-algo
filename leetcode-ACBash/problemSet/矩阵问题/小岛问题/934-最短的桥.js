/***
 * @creater:ACBash
 * @create_time:22-10-26 10:56:56
 * @last_modify:ACBash
 * @modify_time:22-10-26 12:38:19
 * @line_count:121
 **/

//BFS找其中一个小岛 + BFS找和另外一个小岛的最短距离
const shortestBridge = (grid) => {
    const n = grid.length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let queue = [], island = [];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                queue.push([i, j]);
                grid[i][j] = -1;

                while(queue.length){
                    const cell = queue.shift();
                    island.push(cell);
                    const x = cell[0], y = cell[1];

                    for(const [dx, dy] of dirs){
                        const nx = x + dx;
                        const ny = y + dy;

                        if(nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] == 1){
                            queue.push([nx, ny]);
                            grid[nx][ny] = -1;
                        }
                    }
                }

                let step = 0;

                for(const cell of island){
                    queue.push(cell);
                }

                while(queue.length){
                    const sz = queue.length;
                    
                    for(let i = 0; i < sz; i++){
                        const cell = queue.shift();
                        const x = cell[0], y = cell[1];
                        
                        for(const [dx, dy] of dirs){
                            const nx = x + dx;
                            const ny = y + dy;

                            if(nx >= 0 && nx < n && ny >= 0 && ny < n){
                                if(grid[nx][ny] == 0){
                                    queue.push([nx, ny]);
                                    grid[nx][ny] = -1;
                                }else if(grid[nx][ny] == 1){
                                    return step;
                                }
                            }
                        }
                    }

                    step++;
                }
            }
        }
    }

    return 0;
};

//DFS找其中一个小岛 + BFS找和另外一个小岛的最短距离
const shortestBridge = (grid) => {
    const n = grid.length;
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let queue = [];

    const dfs = (x, y, grid, queue) => {
        if(x < 0 || y < 0 || x >= n || y >= n || grid[x][y] != 1){
            return;
        }

        queue.push([x, y]);
        grid[x][y] = -1;
        
        dfs(x + 1, y, grid, queue);
        dfs(x - 1, y, grid, queue);
        dfs(x, y + 1, grid, queue);
        dfs(x, y - 1, grid, queue);
    };

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                dfs(i, j, grid, queue);
                let step = 0;

                while(queue.length){
                    const sz = queue.length;
                    
                    for(let i = 0; i < sz; i++){
                        const cell = queue.shift();
                        const x = cell[0], y = cell[1];

                        for(const [dx, dy] of dirs){
                            const nx = x + dx;
                            const ny = y + dy;
                            
                            if(nx >= 0 && nx < n && ny >= 0 && ny < n){
                                if(grid[nx][ny] == 0){
                                    queue.push([nx, ny]);
                                    grid[nx][ny] = -1;
                                }else if(grid[nx][ny] == 1){
                                    return step;
                                }
                            }
                        }
                    }

                    step++;
                }
            }
        }
    }

    return 0;
};