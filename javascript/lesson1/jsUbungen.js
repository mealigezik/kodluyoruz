//! -------SAYAC ARTIRMA-------------

let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

// function clickEvent() {
//     console.log(this.id);
//     if (this.id == "increase"){
//         counterDOM.innerHTML = counter ++ 
//     }else if (this.id == "decrease"){
//         counterDOM.innerHTML = counter --
//     }
//     return counter
// }

function clickEvent() {
    this.id == "increase" ? counterDOM.innerHTML = counter++ : counterDOM.innerHTML = counter--
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}

// function clickEvent() {
//     counterDOM.innerHTML = counter
//     this.id == "increase" ? counter++ : counter--
// }

// deneme