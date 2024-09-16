
// let key = prompt("ENter key")
// let value = prompt("ENter value")

// localStorage.setItem(key, value)

// console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

window.onstorage = (e) =>{
    alert("Changed")
    console.log(e)
}