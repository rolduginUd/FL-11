let a = +prompt('Input length of first side: ');
let b = +prompt('Input length of secont side: ');
let c = +prompt('Input length of third side: ');

if(a + b >= c && a + c >= b && b + c >= a){
    if(a === b && a === c && c === b){
        console.log('Eequivalent triangle');
    } else if(a === b || a === c || c === b){
        console.log('Isosceles triangle');
    } else{
        console.log('Normal triangle');
    }
} else{
    console.log('Triangle doesn’t exist');
}