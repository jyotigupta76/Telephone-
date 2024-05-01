let userInput = document.querySelector('.user_Input');
const form = document.querySelector('form');
const result = document.querySelector(".result");

let randomNumber = Math.floor(Math.random() * 100)

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    console.log("Submitted");
     const userInputValue = parseInt(userInput.value);
    if(userInputValue === randomNumber ){
        result.innerHTML = "Congratus you guess correct number";
    }
    else if(userInputValue > randomNumber){
        result.innerHTML = "You guess high number";
    }
    else if(userInputValue < randomNumber){
        result.innerHTML = "You guess low number";
    }
    else{
        result.innerHTML = "You are very close to guess number";
    }

    form.reset();
})

