// function hello(firstName) {
//     console.log(`Merhaba ${firstName}`);
// }

// hello("Javascript")
// // hello()

// const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }
// helloFuncV1('Arrow Function v1')

// const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`);
// helloFuncV2('Arrow Function v2')

// const helloFuncV3 = (firstName, lastName) => console.log(`Merhaba ${firstName} ${lastName}`);
// helloFuncV3('Arrow Function v3', 'Second Element')

// const helloFuncV4 = (firstName, lastName) => {
//     let info = `Merhaba ${firstName} ${lastName}`
//     console.log(info);
//     return info
// }
// helloFuncV4('Arrow Function v3', 'Third Element')

//! EVENTSLAR ----------------------------------------------------------

let greeting = document.querySelector('#greeting');
greeting.addEventListener("mouseover", domClick)

function domClick(){

        console.log("Tiklandi")
        // console.log(this.innerHTML ="tiklandigi icin bilgi degisti");
        // console.log(this)
        // console.log(this.style.color = "red");
        this.style.color == "red" ? this.style.color = "white" : this.style.color = "red"
    
}
// let greeting = document.querySelector('#greeting');
// greeting.addEventListener("click", domClick)

// function domClick(){

//         console.log("Tiklandi")
//         // console.log(this.innerHTML ="tiklandigi icin bilgi degisti");
//         // console.log(this)
//         // console.log(this.style.color = "red");
//         this.style.color == "red" ? this.style.color = "white" : this.style.color = "red"
    
// }

let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('select', function(event) {
output.innerText = event.target.value.split('').join('');
});

// ,jhasgdadsdjf