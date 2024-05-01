const count = document.querySelector(".Count");
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const change_number = document.querySelector('.change_number');
const reset = document.querySelector(".reset");
 

plus.addEventListener('click' , () =>{
    const countValue = parseInt(count.innerHTML);
    const change_value = parseInt(change_number.value);
    count.innerHTML =  countValue + change_value;
},false)

minus.addEventListener('click' , () =>{
    const countValue = parseInt(count.innerHTML);
    const change_value = parseInt(change_number.value);
    count.innerHTML = countValue - change_value;
},false)


reset.addEventListener("click", () => {
    count.innerHTML = 0;
})



