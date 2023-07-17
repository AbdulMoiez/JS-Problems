const CurrentDate = new Date()
const days = CurrentDate.getDay()
const hrs = CurrentDate.getHours()
const mins = CurrentDate.getMinutes()
const secs = CurrentDate.getSeconds() 
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function DateFormat(days,hrs, mins, secs,daysArray) {
    let Time = ''
    if (hrs > 12) {
        Time = `Current Time ${hrs-12} PM : ${mins} : ${secs}`
    }
    else if(hrs === 12 ){
        Time =  `${hrs} PM : ${mins} : ${secs}`
    } 
    else if(hrs === 0){
        hrs = 12
        Time =  `${hrs} AM : ${mins} : ${secs}`
    }
    else{
        Time =  `${hrs} AM : ${mins} : ${secs}`
    }
    console.log(Time);
    
     let day = 'Today is '+  daysArray[days]
    console.log( day);
    document.getElementById('Result1').innerHTML = day  + ' <br>' + Time
}
//2- Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

function Jan1st(yearStart , yearEnd) {
    let Jan1stYear = []
    for (let i = yearStart; i <= yearEnd    ; i++) {
        const date = new Date( i , 0 , 1 )
        const days = date.getDay();
        if (days === 0) {
            Jan1stYear.push(i)
        }
    }
    console.log(`The Year which has 1st Jan is on Sunday are ${Jan1stYear.join(",")}`);
    document.getElementById('Result2').innerHTML = `The Year which has 1st Jan is on Sunday are ${Jan1stYear.join(",")}`
}
// 3- Write a JavaScript program to calculate the days left before Christmas. 


let ChristmasDate = new Date(`12/25/${CurrentDate.getFullYear()}`)

function DaysLeft(date1, date2) {

    let Time1 = date1.getTime()
    let Time2 = date2.getTime()

    let Time_Differ = Time2 - Time1
    let Days = Math.round((Time_Differ /(1000*60*60*24) ))
    console.log(`Day Until Christmas: ${Days}`);

    document.getElementById('Result4').innerHTML = `Day Until Christmas: ${Days}`
}



//4- Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 

function tripleSum(x ,y) {
    console.log(x,y);
    sumNum = 0 ;
    if (x === y) {
        sumNum = 3 * (x + y);
}
else{
    sumNum = x + y
}
console.log(sumNum);
document.getElementById('Result3').innerHTML = `Triple Sum of the given number ${sumNum}`
}



//5- Write a JavaScript program to check two given integers whether one is positive and another one is negative.


function CheckNumber(x, y) {
    console.log(x,y);
    if ((x > 0) && (y > 0)){
    document.getElementById('Result5').innerHTML = `${x} is positive number and ${y} is positive number`
        
    } else if((x < 0) && (y < 0)){
        
        document.getElementById('Result5').innerHTML = `${x} is negative number and ${y} is negative number`
    } else if((x > 0) && (y < 0)){
        
        document.getElementById('Result5').innerHTML = `${x} is positive number and ${y} is negative number`
    } else{
        
        document.getElementById('Result5').innerHTML = `${x} is negative number and ${y} is positive number`
    }


}




//6- Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

let str1 = "Hello World! working with javascript"
let str2 = "Py is default in this string  Hello World! working with javascript"
function AddingPy(str) {
    let StrArray = str.trim().split(" ");
 let newStr = '' 
    
    if (StrArray[0] !== 'Py' ) {
        StrArray.unshift('Py');
       newStr=(StrArray.join(" "));
    } else{
        newStr=(StrArray.join(" "))
    }

    console.log(newStr);
    document.getElementById('Result6').innerHTML = `${newStr}`
}



//7- Write a JavaScript program to change the capitalization of all letters in a given string. 

let str = 'hello world! you HAVE to learn JAVASCRIPT'
function Capitalization(str) {
    let token = str.split('')
   let newStr = ''

for (let i = 0; i < token.length; i++) {
let letters = token[i]
if (token[i].toLowerCase() === letters ) {
   
    token[i] = token[i].toUpperCase()
    
    }
    else if(token[i].toUpperCase() === letters ){
        
        token[i] = token[i].toLowerCase()
    }
        
    }   
    newStr = token.join(' ')
    console.log(newStr);
    document.getElementById('Result7').innerHTML = `${newStr}`
}


//8- Write a JavaScript program to compute the sum of all the digits that occur in a given string.

let str3 = '123Hello!456World789'

function Sum(str) {
    let token = str.split('')
    let sumAll = 0
    // console.log(token);
   for (let i = 0; i < token.length; i++) {
    let number = Number(token[i])
    if (!isNaN(number)) {
        sumAll += number
    }
    
   }
   console.log(sumAll);
   document.getElementById('Result8').innerHTML = `Sum of all the digits that occur in a given string: ${sumAll}`
}



//9-  Write a JavaScript program to break an URL address and put its parts into an array. Note: url structure : ://.org[/] and there may be no part in the address.

let str4 = 'https://bslthemes.com/html/itsulu/service-1.html'
function BreakUrl(str) {
    let array = str.split('/')
    console.log(array);
    // console.log(array.join('/'));
    document.getElementById('Result9').innerHTML = `${array}`

}




// 10- Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.

let Array = ['Need a name','hello','Likely name with spaces separated', 'world!','What is plane']

function StringOrder(arr) {
    console.log(arr);
    arr.sort(function(a,b){return a.length - b.length})

    console.log(arr);
    document.getElementById('Result10').innerHTML = `${arr}`
}


// 'When you become comfortable with palindromes you can have a lot of fun with wordplay creating sentences civic radar level rotor kayak madam refer drab as a fool aloof as a bard'
let words = 'become civic your level rotor lot madam refer drab'
function Palindrome(word) {
    let token1 = word.split('');
    let reverseWord = token1.reverse().join('')

    let token2 = word.split(' ')
    let token3 = reverseWord.split(' ')
    let Palindrome = []
for (let i = 0; i < word.length; i++) {
    if (token2[i] === token3[token3.length -(i+1)]) {
        Palindrome.push(token2[i]);

        
    }
    
}
console.log(Palindrome.join(' '));
   
}
// Palindrome(words)
