// console.log(document.head);
// console.log(document.body);

// document.write(document.head)
// document.write(document.body)

document.body.style.backgroundColor = "brown"


// let h2 = document.getElementsByTagName('h2')

// console.log(h2.title.innerHTML)

let title = document.getElementById('title')
console.log(title)
console.log(title.innerHTML)
console.log(title.innerText)
console.log(typeof title.innerText)
console.log(typeof(title.innerHTML = "Merhaba"))

let link = document.querySelector("ul>li>a")

console.log(link);