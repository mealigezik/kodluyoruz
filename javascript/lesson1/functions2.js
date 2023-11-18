let firstName = "Lorem"
// let lastName = "Ipsum"

function greeting(firstName="", lastName="") {
    // console.log(`Hello  ${firstName ? firstName : "Empty"}`);
    // console.log(`taked deft parameter ->> Hello ${firstName}`);
    console.log(`Merhaba ${firstName} and ${lastName}`);
    console.log(firstName, lastName);
}

// greeting("Parameter", "second parameter")


function greetings2(firstName, lastName){
    let info = `Merhaba ${firstName} and ${lastName}`
    return info
}

let info = greetings2("ad", "soyad")

console.log(info);

function domIdWriteInfo(id, info){
    let domObject = document.querySelector(`#${id}`)
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">H3</span>`

domIdWriteInfo("greeting", "H1")
domIdWriteInfo('infoSecond', greetings2("H2", "h2"))
domIdWriteInfo('infor', htmlInfo)


//!----------------------------------------------------------------

function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");