let start = confirm('Do you want to play a game?');
let restart;
let range = 8;
let counter = 3;
let totalPrize = 0;
let possiblePrize = 100;
let attempts = 3;
let attemptReTry = 4;
let standart = 8;
let standartPrize = 100;
let half = 2;
let four = 4;

if (!start) {
    alert('You did not become a billionaire, but can.');
} else {
    let randomNumber = Math.floor(Math.random() * range + 1); 

    for (; attempts > 0; attempts--) {   
        let win;
        let userNumber = +prompt('Choose a roulette pocket number from 0 to ' + range +
        '\nAttempts left: ' + attempts + '\nTotal prize: ' + totalPrize + '$' +
        '\nPossible prize on current attempt: ' + possiblePrize + '$');
    
        if (randomNumber === userNumber) {
            totalPrize += possiblePrize;
            win = confirm('Congratulation, you won! Your prize is: '+ totalPrize + '$. Do you want to continue?');
            attempts = four;
            range = range + four;
            randomNumber = Math.floor(Math.random() * range + 1); 
            possiblePrize = possiblePrize * half;       
            
            if (!win) {
                alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                start = confirm('Do you wants to play again?');
                
                if (start) {
                    attempts = attemptReTry;
                    totalPrize = 0;
                    range = standart;
                    possiblePrize = standartPrize;
                }
            }
        } else if (attempts === 1 && randomNumber !== userNumber) {
            alert('Thank you for your participation. Your prize is: ' + totalPrize + '$');
                start = confirm('Do you wants to play again?');
                
                if (start) {
                    attempts = attemptReTry;
                    totalPrize = 0;
                    range = standart;
                    possiblePrize = standartPrize;
                }
        } else {
            possiblePrize = possiblePrize / half;
        }
    }
    alert('You did not become a billionaire, but can.');
}