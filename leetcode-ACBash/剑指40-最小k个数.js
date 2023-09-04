/***
 * @creater:ACBash
 * @create_time:21-12-27 10:36:41
 * @last_modify:ACBash
 * @modify_time:21-12-27 13:32:3
 * @line_count:148
 **/

 const defaultCmp = (a, b) => a > b;
 const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
 
 class Heap{
     constructor(cmp = defaultCmp){
         this.container = [];
         this.cmp = cmp;
     }
 
     insert(val){
         const {container, cmp} = this;
 
         container.push(val);
 
         let index = container.length - 1;
 
         while(index){
             let parent = (index - 1) >> 1;
 
             if(cmp(container[parent], container[index])) break;
 
             swap(container, index, parent);
 
             index = parent;
         }
     }
 
     extract(){
         if(!this.size()) return null;
         if(this.size() == 1) return this.container.pop();
 
         const {container, cmp} = this;
 
         swap(container, 0, container.length - 1);
 
         const ans = container.pop(), len = container.length;
         let index = 0, betterChild = index * 2 + 1;
 
         while(betterChild < len){
             let right = index * 2 + 2;
 
             if(right < len && cmp(container[right], container[betterChild])) betterChild = right;
 
             if(cmp(container[index], container[betterChild])) break;
 
             swap(container, index, betterChild);
 
             index = betterChild;
             betterChild = index * 2 + 1;
         }
 
         return ans;
     }
 
     top(){
         if(!this.size()) return null;
         return this.container[0];
     }
 
     size(){
         return this.container.length;
     }
 }
 
 /* 最大堆 */
 const smallestK = (arr, k) => {
     let maxHeap = new Heap(), ans = [];
 
     for(const val of arr){
         maxHeap.insert(val);
 
         if(maxHeap.size() > k) maxHeap.extract();
     }
 
     while(maxHeap.size()){
         ans.push(maxHeap.extract());
     }
 
     return ans;
 };
 
 /* 最小堆 */
 const smallestK = (arr, k) => {
     let maxHeap = new Heap((a, b) => a < b), ans = [];
 
     for(const val of arr){
         maxHeap.insert(val);
     }
 
     while(k--){
         ans.push(maxHeap.extract());
     }
 
     return ans;
 };
 
 /* API怪，全排序后多香 */
 const smallestK = (arr, k) => {
     arr.sort((a, b) => a - b);
 
     return arr.slice(0, k);
 };
 
 /* 题目要求「任意顺序返回这 kk 个数即可」，因此我们只需要确保前 kk 小的数都出现在下标为 [0, k)[0,k) 的位置即可。
 利用「快速排序」的数组划分即可做到。 */
 /* 快排有很多写法，下次看看 */
 const swap = (nums, i, j) => [nums[i], nums[j]] = [nums[j], nums[i]];
 
 const randomizedPartition = (nums, left, right) => {
     const partition = (nums, left, right) => {
         const pivot = nums[right];
         let i = left - 1;
 
         for(let j = left; j <= right - 1; j++){
             if(nums[j] <= pivot){
                 i++;
                 swap(nums, i, j);
             }
         }
 
         swap(nums, i + 1, right);
 
         return i + 1;
     };
 
     const i = left + (Math.random() * (right - left + 1)) | 0;
 
     swap(nums, right, i);
 
     return partition(nums, left, right);
 };
 
 const randomizedSelected = (arr, left, right, k) => {
     if(left >= right) return;
 
     const pos = randomizedPartition(arr, left, right);
     const num = pos - left + 1;
 
     if(k == num) return;
     else if(k < num) randomizedSelected(arr, left, pos - 1, k)
     else randomizedSelected(arr, pos + 1, right, k - num);
 };
 
 const smallestK = (arr, k) => {
     randomizedSelected(arr, 0, arr.length - 1, k);
 
     return arr.slice(0, k);
 };