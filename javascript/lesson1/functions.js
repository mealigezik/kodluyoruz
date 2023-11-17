
function hello() {
    console.log("Hello sir!")
    helloWorld()
    userCheck()
    // aaa()
    // printHello()
}

function helloWorld() {
    console.log("Hello world!");
}

function userCheck() {
    let userName = prompt("Enter your Name: ");
    let age = prompt("Enter your age: ");
    if (userName && age >= 18) {
        info.innerHTML = "ehliyet alabilirsiniz"
    } else if (!userName) {
        info.innerHTML = "kullanici adi giriniz"
    } else if (!(age >= 18)) {
        info.innerHTML = "Yas bilginiz yok yada 18 yasindan kucuksunuz"
    }
}


hello()

function printHello(name) {
    info.innerHTML = `Hello ${name}`
}

// printHello("bilge")

function aaa() {
    let num1 = parseInt(prompt("first num"))
    let num2 = parseInt(prompt("second num"))
    function addition(num1, num2) {
        info.innerHTML = `${num1} ve ${num2} sayilarinizin toplami ${num1 + num2} `
    }

    addition(num1, num2)
}

