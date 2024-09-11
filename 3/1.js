
// function hello(){
//     alert("kya ree")
// }

//loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)

// let promise = new Promise(function(resolve, reject){
//     console.log("Kuch bhi")
//     resolve(56)
// })
// console.log(promise)
// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Kuch bhi")
//         resolve(true)
//     }, 2000);
    
// })


// let p= new Promise(function(resolve, reject){
//     setTimeout(()=> {
//     console.log("Mt khao")
//     reject(new Error("I'm an error haha!"))
// }, 2000)
// })

// promise.then(alert)
// promise.then((value) => {
//     console.log(value);
// })

// p.catch((error)=>{
//     console.log("error gya")
// })



// promise.then((value)=>{
//         console.log("ama kheriyat")
//         return new Promise((resolve, reject)=>{
//             setTimeout(() => {
//                 resolve(4)
//             }, 2000);
// })
// }).then((value) => {
//     console.log(value)
// })


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ye le 1");
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ye le 2");
    }, 8000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ye le 3");
    }, 1000);
})


p1 = Promise.all([promise, p2, p3])
p1.then((value)=>{
    console.log(value)
})