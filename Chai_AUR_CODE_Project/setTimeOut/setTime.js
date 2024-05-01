
// setTimeout(function(){
//     document.querySelector('h1').innerHTML = "Hey Google";
// },2000);



//  let store = function(){
//     document.querySelector('h1').innerHTML = "Hey Google";
//  }
// setTimeout(store , 1000);




document.querySelector('#Start').addEventListener('click' , function(){
    const  changeMe = setInterval(function(){
        document.querySelector('h1').innerHTML = "Hey Google";
    },2000)
}, false);


document.querySelector('#stop').addEventListener('click' , function(){
        clearTimeout(changeMe);
}, false);
