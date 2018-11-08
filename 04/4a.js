// Iterative
var solution = 1, 
    number = 12,
    x, y;
for (x = number; x > 0; x -= 1) {
    solution *= x; 
} 
console.log(solution);

// Recursive
function fact(n){
  if(n == 1)
    return 1;
   else
    return n * fact(n - 1);
}

console.log(fact(number))