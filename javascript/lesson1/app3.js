// veri girisi alma

// let fullName = prompt("Please enter name: ")
// let greeting = document.querySelector("#greeting")
// greeting.innerHTML = `${greeting.innerHTML}<hr><small style="color:red;">${fullName}</small>`

let item = document.querySelector("ul#myList>li:last-child")
console.log(item);

let item2 = document.querySelector("ul#myList>li:first-child").innerHTML
console.log(item2);

document.querySelector("ul#myList>li:first-child").innerHTML = "Artik Bursa"

let ulDOM = document.querySelector("ul#myList")
let liDOM = document.createElement('li')

console.log(ulDOM);

liDOM.innerHTML = "self created element"

ulDOM.append(liDOM)

// console.log(ulDOM.lastChild);

// ulDOM.prepend(prompt("Please enter name: "))
ulDOM.append(prompt("Please enter name: ")) //todolist muhabbeti

