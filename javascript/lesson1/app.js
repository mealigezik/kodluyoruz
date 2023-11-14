// console.log("Hello world!");
// document.write("Hello world!");
// document.write();

// let a = 5
// document.write(a);
// a = a + 4
// document.write(a);
// a = "sifirlandi"
// a += " ve yeni"

// console.log(a + "     asdasd");

// let price = (100)
// let tax = (0.18)
// let priceTax = price * tax
// let totalPrice = price + priceTax

// console.log("Ürün fiyati " + totalPrice);

// let counter = 320

// counter += 1
// counter++;
// console.log(counter);

// let username = "Editör"
// const DOMAIN = "bilgepanter.com"

// let user = username + "@" + DOMAIN

// console.log(user);

// let info = `Welcome ${username}
// e-mailini ${user} olarak kaydedildi
// ve senin emialinin uzunlugu ${user.length} karakterdi
// borcunu ${4 + 3 * 2}
// saat ${new Date().getTime()}
// getDay ${new Date().getDay()}
// saat ${new Date().getFullYear()}
// saat ${new Date().getHours()}
// saat ${new Date().getMinutes()}
// saat ${new Date().getMinutes()}
// saat ${new Date().getMilliseconds()}

// saat ${new Date().getTimezoneOffset()}
// `

// console.log(info);

// document.write(info);


// const timestamp = 1699896654112;
// const date = new Date(timestamp);

// const options = { 
//     year: 'numeric', 
//     month: 'numeric', 
//     day: 'numeric', 
//     hour: 'numeric', 
//     minute: 'numeric', 
//     second: 'numeric', 
//     timeZoneName: 'short' };
// const formattedDate = new Intl.DateTimeFormat('default', options).format(date);

// console.log(formattedDate);

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

// string karakter sayisi -> length
console.log( email.length )

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)
// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"))
console.log( email[15] )

email.search('olmayan') // -1
console.log(email.search('olmayan'));

// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice( email.search("@") + 1)
console.log("brasi"+DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.') )  // sadece gmail kismini aldik
)

// bilgiyi degistir -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

// istedigim bilgi var mi ? -> includes :
email.includes('dkfhsd') // false
email.includes('@') // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(
    email.endsWith('kodluyoruz.org')
)

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `
${firstName[0].toUpperCase()}
${firstName.slice(1).toLowerCase()} 
${lastName[0].toUpperCase()}
${lastName.slice(1).toLowerCase()}`

console.log(fullName);

console.log(document.URL);
console.log(document.location);
console.log(document.location.hostname);