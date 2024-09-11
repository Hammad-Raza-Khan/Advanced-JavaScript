// const changebgRed = () =>{
//   document.body.firstElementChild.style.background = "red"
// }
// // changebgRed()
// let b = document.body
// console.log("First Child: ", b.firstChild)
// console.log("First Element Child: ", b.firstElementChild)

// let qs = document.getElementById("ha")
// qs.style.fontSize = "48px"

// let c = document.querySelectorAll("#ha")
// c[1].style.color = "red"


// // Match element in js
// b = document.getElementById("ha")
// console.log("This is :" , b)
// console.log(b.matches(".box"))

// // forEach()

// Array.from(document.getElementsByTagName("p")).forEach((element) => {
//     element.style.background = "black";
// })

// first.className = "fon yellow"
// first.classList.remove("fon")
// first.classList.add("fon")

//settimeout

// function changetime(){  

// setTimeout(function(){
//     let a = document.getElementById("cont");
//     a.style.color = "blue"
// }, 1500)}


// let a = document.getElementsByClassName("container")[0]
// console.log(a)

        
//     let b = document.getElementsByClassName("container")[1]
//     b.innerHTML = "Hello Hammad"
// }


//addeventlistener
// btn.addEventListener('click', function(e){
//     alert("Kya ho riya hai ?")
// })
let x = function(event){
    console.log(event)
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY);
    
}
btn.addEventListener('click', x)