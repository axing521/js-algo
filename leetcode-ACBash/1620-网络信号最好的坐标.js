/***
 * @creater:ACBash
 * @create_time:22-11-2 10:1:43
 * @last_modify:ACBash
 * @modify_time:22-11-2 10:1:48
 * @line_count:38
 **/

//遍历
const bestCoordinate = (towers, radius) => {
    let xMax = -1, yMax = -1;
    
    for(const [x, y, q] of towers){
        xMax = Math.max(xMax, x);
        yMax = Math.max(yMax, y);
    }

    let maxQSum = 0;
    let cx = 0, cy = 0;

    const calulatePowDist = (x1, y1, x2, y2) => {
        return (x1 - x2) ** 2 + (y1 - y2) ** 2;
    };

    for(let x1 = 0; x1 <= xMax; x1++){
        for(let y1 = 0; y1 <= yMax; y1++){
            let qSum = 0;

            for(const [x2, y2, q] of towers){
                const powDist = calulatePowDist(x1, y1, x2, y2);
                if(powDist <= radius * radius){
                    const dist = Math.sqrt(powDist);
                    qSum += Math.floor(q / (1 + dist));
                }
            }

            if(qSum > maxQSum){
                maxQSum = qSum;
                cx = x1;
                cy = y1;
            }
        }
    }

    return [cx, cy];
};