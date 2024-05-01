/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++     PROMISE      ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
                                                                --------------------


    1.     The promise object represents the eventual completion or failure.                                                DO an async task
                => Network Request, cryptography, file system.                                                                .) DB Calls, cryptography,network call




PROMISEONE:-

const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
            console.log("Async task is compelete");
            resolve();
    },1000);
});

promiseOne.then(function(){
    console.log("Promise is consumed");
})


PROMISETWO:-
new Promise(function(resolve , reject){
        setTimeout(function(){
            console.log("Async task 2");
            resolve();
        },1000)

}).then(function(){
    console.log("Async 2 resolved");
})


PROMISETHREE:-

const promiseThree = new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve({name : "Jyoti" , comapny : "Google"});
        },1000);
});

promiseThree.then(function(nam){
    console.log(nam);
});


PROMISEFOUR:-


const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name : "Jyoti" , roll_no : 1});
        }else{
            reject('Error Something gone wrong');
        }
    },1000);
});

promiseFour
.then((user) => {
    console.log(user);
    return user.name;
})
.then(() => {
    console.log(name);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log("THe promise is resolved or rejected");
})



ROMISEFIVE
let consumepromiseFive = new promiseFive(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({name : "Jyoti" , roll_no : 1});
        }else{
            reject('Error Something gone wrong');
        }
    },1000);
});

async function consumepromiseFive(){
    try {
        const respose = await promiseFive;
        console.log(respose);
    } catch (error) {
        console.log(error);
    }
}

consumepromiseFive();



*/
