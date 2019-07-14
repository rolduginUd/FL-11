function pipe(x){
   let sum = x;
   for (let i = 1; i < arguments.length; i++) {
      sum = arguments[i](sum);
   }
   return sum;
}
function addOne(x) {
   return x + 1;
}
console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));