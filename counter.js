
const mainTitle = document.querySelector("#title");
const incbtn = document.querySelector(".inc");
const resetbtn = document.querySelector(".reset");
const decbtn = document.querySelector(".dec");

let currentValue =0;
incbtn.addEventListener("click", ()=>{
    currentValue++;
    mainTitle.textContent = currentValue;
})

// decrement value

decbtn.addEventListener("click", ()=>{
    currentValue--;
    mainTitle.textContent = currentValue;
})
//reset
resetbtn.addEventListener("click", ()=>{
    currentValue=0;

    mainTitle.textContent = currentValue;
})