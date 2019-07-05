let a1 = +prompt('Input a1: ');
let a2 = +prompt('Input a2: ');
let b1 = +prompt('Input b1: ');
let b2 = +prompt('Input b2: ');
let c1 = +prompt('Input c1: ');
let c2 = +prompt('Input c2: ');

 const half = 2;

let c1x = (a1 + b1)/half;
let c2y = (a2 + b2)/half;

if(c1x === c1 && c2y === c2){
    console.log(true);
} else{
    console.log(false);
}