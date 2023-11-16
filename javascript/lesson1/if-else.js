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

// let userName = prompt("User Name")
// let age = prompt("Age")
// let info = document.querySelector("#info")

// if (userName && age >= 18){
//     info.innerHTML = "For " + userName + " Drive License is Available"
// }else if (!userName){
//     info.innerHTML = "Enter your user name"
// }else if (!age){
//     info.innerHTML = "Enter age"
// }else if (!(age >= 18)){
//     info.innerHTML = "Your age must be 18 or greater"
// }else{
//     info.innerHTML = "Don't permission"
// }

// console.log(info);

// ! -------------------------------- ternary

// let userName = propmt("Enter user name")
// let info = document,querySelector("#info")

// info.innerHTML = ``
//?--------------------------------
// let boolean;

// const isBooleanTrue = boolean ? true : false;

// console.log(isBooleanTrue)
//     >> false

// console.log(boolean)

//?--------------------------------

// var money;
// var canBuy =
//     (money < 17) ? "Satın alamazsın.." :
//         (money > 30) ? "Satın alabilirsin.." :
//             "Para miktarını girmen gerekmektedir..";

// console.log(canBuy)
// console.log(money);

//!------------------------------------------------

let examGrade = prompt("Enter your score")


// switch (true) {
//     case  (90<= examGrade && examGrade <= 100):
//         examGrade = "AA";
//         break;
//     case  (85<= examGrade && examGrade <= 89):
//         examGrade = "BA";
//         break;
//     case  (80<= examGrade && examGrade <= 84):
//         examGrade = "BB";
//         break;
//     case  (75<= examGrade && examGrade <= 79):
//         examGrade = "CB";
//         break;
//     case  (70<= examGrade && examGrade <= 74):
//         examGrade = "CC";
//         break;
//     case  (65<= examGrade && examGrade <= 69):
//         examGrade = "DC";
//         break;
//     case  (60<= examGrade && examGrade <= 64):
//         examGrade = "DD";
//         break;
//     case  (50<= examGrade && examGrade <= 59):
//         examGrade = "FD";
//         break;
//     case  (0<= examGrade && examGrade <= 49):
//         examGrade = "FF";
//         break;
//     default:
//         examGrade = "Enter score between 0 and 100";
// }

// console.log(examGrade);


if (90 <= examGrade && examGrade <= 100){
    examGrade ="AA";
}else if(85 <= examGrade && examGrade <= 89){
    examGrade ="BA";
}else if(80 <= examGrade && examGrade <= 84){
    examGrade ="BB";
}else if(75 <= examGrade && examGrade <= 79){
    examGrade ="CB";
}else if(70 <= examGrade && examGrade <= 74){
    examGrade ="CC";
}else if(65 <= examGrade && examGrade <= 69){
    examGrade ="DC";
}
else if(60 <= examGrade && examGrade <= 64){
    examGrade ="DD";
}else if(50 <= examGrade && examGrade <= 59){
    examGrade ="FD";
}else if(0 <= examGrade && examGrade <= 49){
    examGrade ="FF";
}else{
    examGrade ="FALE";
}

let info = document.querySelector("#info");

// info.innerHTML = `${textInfo}`;
info.innerHTML = `${examGrade} notuyla sınavı geçtiniz.`;