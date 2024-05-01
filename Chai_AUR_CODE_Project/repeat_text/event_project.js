//settimeout function :- this function work only one time after given interval of time (means if time_interval is 2000 then function work/print after 2 sec).
//SYNTAX :-    setTimeout(call_back_function , time_interval); 2000 == 2 sec.

// const print = function () {
//     console.log("Jyoti today is your first day in google hope you enjoy this day");
// }
// setTimeout(print,2000);
// }

// setInterval(function(){
//     document.querySelector('h1').innerHTML = "Jyoti today is your first day in google hope you enjoy this day";
// },2000);


// let intervalId;
// const start = function (){
//     intervalId = setInterval(cahnege_Text , 1000);

//     function cahnege_Text(){
//         document.querySelector('h1').innerHTML = "Jyoti today is your first day in google hope you enjoy this day";
//     }
// };


// const stop = function (){
//     clearInterval(intervalId);
// };

// document.querySelector('Start_button').addEventListener('click' , start);

// document.querySelector('Stop_button').addEventListener('click' , stop);

let changee_Text = function () {
    let store = document.getElementById('h1').innerHTML = "Jyoti today is your first day in google hope you enjoy this day";
    return store;
};

let intervalId;
let start = function(){
    intervalId = setInterval(changee_Text,1000);
};

let stop = function(){
    clearInterval(intervalId);
};


document.getElementById("#Start_button").addEventListener('click' , start );

document.getElementById("#Stop_button").addEventListener('click' , stop );
