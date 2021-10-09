
/* .............................. */
/* 1.AC */
let line;
while(line = readline()){
  let inputArray = line.split("");
  for(let i=0; i<inputArray.length; i++){
    console.log(inputArray.join(""));
    inputArray.unshift(inputArray.pop());
    inputArray.unshift(inputArray.pop());
  }
}
/* 2.格式问题 */
let line;
let personSum = readline();
while(line = readline()){
  let scoreStrArr = line.split(" ");
  let scoreNumArr = scoreStrArr.map(item => Number(item));
  let sortedArr = scoreNumArr.sort((a,b) => b-a);
  for(let i=0; i<sortedArr.length; i++){
    console.log(sortedArr[i].toString());
    console.log(`\n`);
  }
  
  let b = [];
  b[0] = sortedArr.filter(item => item===100).length;
  b[1] = sortedArr.filter(item => item>=90 && item<=99).length;
  b[2] = sortedArr.filter(item => item>=80 && item<=89).length;
  b[3] = sortedArr.filter(item => item>=70 && item<=89).length;
  b[4] = sortedArr.filter(item => item>=60 && item<=69).length;
  b[5] = sortedArr.filter(item => item<60).length;
  for(let i=0; i<6; i++){
    console.log(b[i]);
    if(i!==5) console.log(" ");
  }
}
/* 3. */
/* .............................. */

/* LC:992 */
/* 1.2021/10/7 17:38 */
let winSituation = {
  "numMeetK" : 0
};

const seeWin = (nums,L,R) => {
  let win = nums.slice(L,R+1);
  let set0 = new Set(win);

  return set0.size;
};

const tryInternal = (nums,L,R,LTemp,k) => {
  LTemp = L;
  L++;
  while(seeWin(nums,L,R) === k){
      winSituation.numMeetK++;
      L++;
  }
  L = LTemp;
  return L;
};

const subarraysWithKDistinct = (nums,k) => {
  let L = 0, R = 0, LTemp = 0;

  while(R < nums.length){
      if(seeWin(nums,L,R) === k){
          winSituation.numMeetK++;
          L = tryInternal(nums,L,R,LTemp,k);

      }else if(seeWin(nums,L,R) > k){
          while(seeWin(nums,L,R) !== k){
              L++;
          }
          winSituation.numMeetK++;
          L = tryInternal(nums,L,R,LTemp,k);
      }

      R++;
  }

  return winSituation.numMeetK;
};

/* 2.2021/10/7 21:34 winSituation.numMeetK => numMeetK*/
let numMeetK = 0;

const seeWin = (nums,L,R) => {
  let win = nums.slice(L,R+1);
  let set0 = new Set(win);

  return set0.size;
};

const tryInternal = (nums,L,R,LTemp,k) => {
  LTemp = L;
  L++;
  while(seeWin(nums,L,R) === k){
      numMeetK++;
      L++;
  }
  L = LTemp;
  return L;
};

const subarraysWithKDistinct = (nums,k) => {
  let L = 0, R = 0, LTemp = 0;

  while(R < nums.length){
      if(seeWin(nums,L,R) === k){
          numMeetK++;
          L = tryInternal(nums,L,R,LTemp,k);

      }else if(seeWin(nums,L,R) > k){
          while(seeWin(nums,L,R) !== k){
              L++;
          }
          numMeetK++;
          L = tryInternal(nums,L,R,LTemp,k);
      }

      R++;
  }

  return numMeetK;
};

console.log(subarraysWithKDistinct([1,2,1,3,4],3));

/* 3.2021/10/7 22:02 tryInternal修改 */
let numMeetK = 0;

const seeWin = (nums,L,R) => {
  let win = nums.slice(L,R+1);
  let set0 = new Set(win);

  return set0.size;
};

const tryInternal = (nums,L,R,k) => { 
  L++;
  while(seeWin(nums,L,R) === k){
      numMeetK++;
      L++;
  }
};

const subarraysWithKDistinct = (nums,k) => {
  let L = 0, R = 0;

  while(R < nums.length){
      if(seeWin(nums,L,R) === k){
          numMeetK++;
          tryInternal(nums,L,R,k);

      }else if(seeWin(nums,L,R) > k){
          while(seeWin(nums,L,R) !== k){
              L++;
          }
          numMeetK++;
          tryInternal(nums,L,R,k);
      }

      R++;
  }

  return numMeetK;
};

console.log(subarraysWithKDistinct([1,2,1,3,4],4));