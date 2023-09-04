/***
 * @creater:ACBash
 * @create_time:22-10-6 14:18:42
 * @last_modify:ACBash
 * @modify_time:22-10-6 14:18:50
 * @line_count:23
 **/

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const minSwapsCouples = (row) => {
    const len = row.length;
    let hash = new Array(len);

    for(const index in row) hash[row[index]] = index;

    let bro, ans = 0;

    for(let i = 0; i <= len - 2; i += 2){
        bro = row[i] % 2 == 0 ? row[i] + 1 : row[i] - 1;
        const next = row[i + 1];

        if(next != bro){
            swap(row, i + 1, hash[bro]);
            swap(hash, next, bro);
            ans++;
        }
    }

    return ans;
};