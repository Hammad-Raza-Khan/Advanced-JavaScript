// console.log("Assalamu Alaikum")
// alert("Kya haal hain!")
// let a = prompt("Enter any string : \n", "abc...")
// // a = Number.parseInt(a)
// alert("You entered " + typeof(a))

// let write = confirm("Yusuf, look at this!")
// if (write){
//     document.write(a)
// }
// else{
//     document.write("Aurrr bhaii....agya swaad!")
// }

// console.log(window)
// document.body.style.background = "yellow"

// const canDrive = (age) => {
//     return age > 18 ? true : false;
// }
// let runagain = true


// while (runagain) {
//     let age = prompt("Enter your age");
//     age = Number.parseInt(age)

//     if (age < 0) {
//         location.href = "https://youtube.com"

//     }
//     else if (canDrive(age)) {
//         alert("krle Drive")
//     }

//     else {
//         alert("bhag yahan se")
//     }
//     runagain = confirm("Bolega dobara?")

// }

// let color = prompt("COlor bol koi sa: ")
// document.body.style.background = color







const swg = (user, cpu) => {

    

    if (user == cpu) {
        return ("Tied")
    }
    else if (user == "Snake" && cpu == "Water") {
        return ("Human!")
    }
    else if (user == "Snake" && cpu == "Gun") {
        return ("CPU !")
    }
    else if (user == "Water" && cpu == "Snake") {
        return ("CPU !")
    }
    else if (user == "Water" && cpu == "Gun") {
        return ("Human!")
    }
    else if (user == "Gun" && cpu == "Water") {
        return ("CPU !")
    }
    else if (user == "Gun" && cpu == "Snake") {
        return ("Human!")
    }

}

let runagain = true
while (runagain) {
    let user = prompt("Welcome to SWG \n Choose any one")
    let cpu1 = Math.floor(Math.random() * 3)
    let cpu = ["Snake", "Water", "Gun"][cpu1]
    
    result = swg(user, cpu)

    document.write(`User: ${user} <br> CPU: ${cpu} <br>The Winner is: ${result} <br>`)

    runagain = confirm("Bolega dobara?")
}