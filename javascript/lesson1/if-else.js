// console.log("a");
// let username = prompt("enter your name: ")

// if (username.length > 0) {
//     console.log(`Your user name: ${username}`)
//     console.log("Your user name: " + username)
//     console.log(username);
// }
// else {
//     alert("Please enter a username")
// }


// username.length > 0 
//         ? console.log("yes, your username is " + username) 
//         : console.log("No");


// let n = parseInt(readLine().trim(), 10);
// let n = prompt()
// n %2 ? console.log("Weird") : console.log("Not Weird");

let userName = prompt("User Name")
let age = prompt("Age")
let info = document.querySelector("#info")

if (userName && age >= 18){
    info.innerHTML = "For " + userName + " Drive License is Available"
}else if (!userName){
    info.innerHTML = "Enter your user name"
}else if (!age){
    info.innerHTML = "Enter age"
}else if (!(age >= 18)){
    info.innerHTML = "Your age must be 18 or greater"
}else{
    info.innerHTML = "Don't permission"
}

console.log(info);