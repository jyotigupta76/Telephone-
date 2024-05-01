const randomColor = function(){
    const hex = "123456789abcdef";
    let color = "#";
    for(let i = 0; i<6; i++){
        color += Math.floor(Math.random()*16);
    }
    return color;
};

// console.log(randomColor());
let intervalId;

const starChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(cahngeBagroungColor , 1000);
    }

   function cahngeBagroungColor(){
     document.body.style.backgroundColor = randomColor();
   }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};


document.getElementById('start').addEventListener('click' , starChangingColor );

document.getElementById('stop').addEventListener('click' , stopChangingColor );



