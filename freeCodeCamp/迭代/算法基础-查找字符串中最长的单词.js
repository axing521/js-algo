//简单利用split转成数组，再进行打擂台
function findLongestWordLength(str) {
    var arr=str.split(" ");
    let temp=0,i=0;
    while(i<arr.length){
      temp=temp>arr[i].length?temp:arr[i].length;
      i++;
    }
    return temp;
  }
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//深刻理解reduce，利用Math.max()
function findLongestWordLength(str) {
    return str.split(' ')
              .reduce((longest, word)=>Math.max(longest, word.length), 0);
  }
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//灵活运用split和join，递归
function findLongestWordLength(str) {
    // split the string into individual words
    const words = str.split(" ");

    if (words.length == 1) {
      return words[0].length;
    }
  
    return Math.max(
      words[0].length,
      findLongestWordLength(words.slice(1).join(" "))
    );
  }
findLongestWordLength("The quick brown fox jumped over the lazy dog");
//这个完全抓住主要矛盾，简洁优雅！
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}