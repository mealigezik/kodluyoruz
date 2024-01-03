let user ={userName: "bilgepanter", isActive: true}
console.log(user);
localStorage.setItem("userInfo", JSON.stringify(user));

let userInfo = localStorage.getItem("userInfo");