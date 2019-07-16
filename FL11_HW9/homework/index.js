let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
function getNumbers(str){
    let arr = new Array();
    for (let i = 0; i < str.length; i++) {
        if(parseFloat(str[i])){
            arr.push(parseFloat(str[i]));
        }
    }
    return arr;
}
 // returns [5, 8, 11])
function executeforEach(mass, massFunc){  
    for(let i = 0; i < mass.length; i++){
        massFunc(mass[i]);
    }  
}

function mapArray(mass, massFunc){  
    let arr = [];
    executeforEach(mass, function(a){
        arr.push(massFunc(a));
    });
    return arr;
}

function filterArray(mass, massFunc){
    let arr = [];
    executeforEach(mass, function(i){
        if(massFunc(i)){
            arr.push(i);
        }
    });
    return arr;
}

function findTypes(){
    let obj = new Object();
    let mass = [];
    for(let i = 0; i < arguments.length; i++){
        mass.push(typeof arguments[i]);
        for(let j = 0; j < mass.length; j++){
            if(typeof arguments[i] === mass[j]){
                obj[mass[j]] ? obj[mass[j]]++ : obj[mass[j]] = 1;
            }
        }
    }
    return obj;
}
function showFormattedDate(date){
    let mass = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let formatDay = date.getDate();
    let formatYear = date.getFullYear();
    let formatMonth = mass[date.getMonth()];
    return 'Date: ' + formatMonth + ' ' + formatDay + ' ' + formatYear; 
}


function canConvertToDate(unConvertData){
    let date = new Date(unConvertData);
    if(Date.parse(date)){
        return true;
    }
    return false;
}
function daysBetween(firstDay, secondDay){
    let first = Date.parse(firstDay);
    let second = Date.parse(secondDay);
    let thousend = 1000;
    let sixty = 60;
    let twentyFour = 24;

    let differentBetweenDays = second - first;

    return Math.round(differentBetweenDays / (thousend * sixty * sixty * twentyFour));
}

function getAmountOfAdultPeople(data){
    let today = new Date();
    let daysInYear = 365;
    let arrOfYears = [];
    let eighteen = 18;
    for(let i = 0; i < data.length; i++){
        let birthValue = data[i].birthday;
        let hisDays = daysBetween(birthValue, today);
        let hisYears = hisDays / daysInYear;
        arrOfYears.push(hisYears);
    }
    let arrOfAdultPeople = filterArray(arrOfYears, function(x){
        return x > eighteen;
    });
    return arrOfAdultPeople.length;
}

function keys(x){
    let arr = [];
    for(let i in x){
        if({}.hasOwnProperty.call(x, i)){
            arr.push(i);
        }
    }
    return arr;
}

function values(x){
    let arr = [];
    for(let i in x){
        if({}.hasOwnProperty.call(x, i)){
            arr.push(x[i]);
        }
    }
    return arr;
}