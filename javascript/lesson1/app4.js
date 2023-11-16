let price = "100"
let user = "bilge"

console.log("=", price == 1);
console.log("new",price = 100);
console.log("==",price == 100);
console.log("===", price === 100);
console.log("!= 2", price != 2);
console.log("!= 100", price != 100);
console.log("!== 100", price !== 100);

console.log("price <=100", price <= 100);
console.log("price >=100", price >= 100);
console.log("price >100", price > 100);
console.log("price >1", price > 1);

console.log(user);
console.log(user == "bilge");
console.log(user != "bilge");

console.log(price && user != "bilge");
console.log(price || user != "guest");

console.log(!!2)