
function hello(){
    console.log("Hello sir!")
    helloWorld()
    userCheck()
}

function helloWorld(){
    console.log("Hello world!");
}

function userCheck(){
    
    let userName = prompt("Enter your Name: ");
    let age = prompt("Enter your age: ");
    if (userName && age >= 18){
        info.innerHTML = "ehliyet alabilirsiniz"
    }else if (!userName){
        info.innerHTML = "kullanici adi giriniz"
    }else if ( !(age >= 18)){
        info.innerHTML = "Yas bilginiz yok yada 18 yasindan kucuksunuz"
    }
}


hello()