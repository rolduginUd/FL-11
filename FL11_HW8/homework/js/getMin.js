function getMin(){
    let min = Infinity;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] < min){
            min = arguments[i];
        }
    }
    return min;
}
console.log(getMin(3, 0, -3));