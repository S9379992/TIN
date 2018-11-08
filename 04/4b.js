function fib(n, a=1, b=0) {
    if (n === 0) {
      return b;
    } else {
      return fib(n-1, b, a+b);
    }
  }
  
  
  console.log(fib(13)); // 55