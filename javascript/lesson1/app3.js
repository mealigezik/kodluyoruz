let fullName = prompt("Please enter name: ")

let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML}<hr><br><br> <small style="color:red;">${fullName}</small>`