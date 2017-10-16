function fibonacci(n) {
  let prevNum = 1;
  let currentNum = 0;
  let nextNum = 0;
  const fiboArr = [];
  for (let i = 0; i < n; i++) {
    fiboArr.push(nextNum);
    nextNum = prevNum + currentNum;
    prevNum = currentNum;
    currentNum = nextNum;
  }
  return fiboArr;
}

console.log(fibonacci(5));
