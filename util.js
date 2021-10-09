/* ----------------------------------------------My Util -----------------------------------------------------*/

//在HashTable中
export function loseloseHashCode(key){    
  if(typeof key==="number"){
      return key;
  }
  const tableKey=this.toStrFn(key);
  let hash=0;
  for(let i=0;i<tableKey.length;i++){
      hash+=tableKey.charCodeAt(i);//String类的charCodeAt方法会返回指定位置字符的ASCII码
  }
  return hash%37;
}

//在HashTable中
export function djb2HashCode(key){        
  const tableKey=this.toStrFn(key);
  let hash=5381;
  for(let i=0;i<tableKey.length;i++){
    hash=(hash*33)+tableKey.charCodeAt(i);
  }
  return hash%1013;
}

/* ----------------------------------------------My Util -----------------------------------------------------*/
export const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
  EQUALS: 0
};

export const DOES_NOT_EXIST = -1;

export function lesserEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || comp === Compare.EQUALS;
}

export function biggerEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.BIGGER_THAN || comp === Compare.EQUALS;
}

export function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

export function defaultEquals(a, b) {
  return a === b;
}

export function defaultToString(item) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export function swap(array, a, b) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}
export function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}

export function defaultDiff(a, b) {
  return Number(a) - Number(b);
}
