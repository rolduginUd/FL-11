function formatTime(yourTime){
    let hours = Math.floor(yourTime / 60);
    let days = Math.floor(hours / 24);
    let minutes = Math.floor(yourTime % 60);
    console.log(days + ' day(s) ' + Math.floor(hours % 24) + ' hour(s) ' + minutes + ' minute(s).')
 }
 formatTime(59);
 formatTime(120);
 formatTime(3601);