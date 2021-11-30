/***
 * @creater:ACBash
 * @create_time:21-11-30 16:2:58
 * @last_modify:ACBash
 * @modify_time:21-11-30 16:2:59
 * @line_count:26
 **/

class DisjointSetUnion{
    constructor(n){
        this.n = n;
        this.rank = new Array(n).fill(1);
        this.f = Array.from(new Array(n), (val, index) => index);
    }

    find(x){
        if(this.f[x] == x) return x;

        this.f[x] = this.find(this.f[x]);
        return this.f[x];
    }

    unionSet(x, y){
        let fx=  this.find(x), fy = this.find(y);
        if(fx == fy) return false;

        if(this.rank[fx] < this.rank[fy]) [fx, fy] = [fy, fx];

        this.rank[fx] += this.rank[fy];
        this.f[fy] = fx;

        return true;
    }
}