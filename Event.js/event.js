//IN JS events(code) run secquensially 
//we can write the onclick = "aleart('song") in inline way not this is not physiable way 

//attacheEvent  method  :- THis method is used in early era
//jQueary - onEvnetListner

// document.getElementById('song').onclick = function(){                   (  This click event is also a not good using because 
//         alert("song clicked");                                            it not give all imformation and it give less feater)
// }

/**++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++IN EVENT WHAT SHOULD WE NEED TO STUDY+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// TYPE , timestamp , defaultPrevented
//Target , ToolElement , SourceElement , currentTarget,
// clienty , clienty , screeny
//altkey , ctrlKEy , shiftKey , keyCode


//EVENT PROPOGATION :- Event propogation has two contex 
//                 1)  Event Bubbling
//                 2)  Event Capturing


// document.getElementById('Emma').addEventListener('click' , function(){
//         alert("Hey its emma she is nice actres");
// },false)


// document.getElementById('images').addEventListener('click' , function(){
//         console.log("click inside the ul");
// },false);


// document.getElementById('Emma').addEventListener('click' , function(e){
//         console.log("clicked on Emma");
//         e.stopPropagation();
// },false);
 

// document.getElementById("google" ).addEventListener('click' ,function(e){
//         e.preventDefault();
//         e.stopPropagation();
//         console.log("Google Clciked");
// },false);

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++IF WE CLICKED ON IMAGE THEN IT REMOVE+++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//first Approche for remove images

// document.querySelector('#images').addEventListener("click" , function(e){
//         console.log(e.target.parentNode);
//         let remov_it = e.target.parentNode;
//         remov_it.remove();
// },false);

//Second approch for remove images

document.querySelector("#images").addEventListener('click' , function(e){
        console.log(e.target.parentNode);
        let removeIt = e.target.parentNode;
        removeIt.parentNode.removeChild(removeIt);
},false);


