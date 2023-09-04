//基础递归
function factorialize(num) {
    return num?num*factorialize(num-1):1;
  }
factorialize(5);
//经典for循环
function factorialize(num) {
    for (var product = 1; num > 0; num--) {
      product *= num;
    }
    return product;
  }
factorialize(5);
