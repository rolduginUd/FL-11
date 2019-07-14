function reverseNumber() {
   let minus = false;
   let result = 0;

   if(arguments[0] < 0){
      arguments[0] = Math.abs(arguments[0]);
      minus = true;
   }

   while (arguments[0]) {
      result = result * 10 + arguments[0] % 10;
      arguments[0] = Math.floor(arguments[0] / 10);
   }

   if(minus === true){
      return -Math.abs(result);
   }

   return result;
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(10000));