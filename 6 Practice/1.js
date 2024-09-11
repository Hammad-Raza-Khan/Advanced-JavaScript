// const loadScript = async (src) => {

//     return new Promise((resolve, reject) =>{
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () =>{
//             resolve(src + "\nDone hogya")
//         }
//         document.head.append(script)
//     })
// }

// const mainn = async () => {
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js ")
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }
// mainn()

// or

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js")
// a.then((value) =>{
//     console.log(value)
// })


//3

// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             reject(new Error("Error aagava bhaiya"))
//         },10)
//     })
// }

// let an = async () => {
//     try {
//         let c = await p()
//         console.log(c)
//     }
//     catch(r){
//         console.log("Hammad " + r.message)
//     }
// }

// an()


let promise = async () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ye le 1");
    }, 1000);
})}
let p2 = async () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ye le 2");
    }, 2000);
})}
let p3 = async () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ye le 3");
    }, 1000);
})}


const run = async () => {
    console.time("run")
    let a = promise()
    let b = p2()
    let c = p3()

    let abc = await Promise.all([a, b, c])
    console.log(abc)
    
    console.timeEnd("run")
}

run()