try{
    console.log(Hammad)
    throw new ReferenceError("BRO is good")
    // age = prompt("Enterrr yourrr aage!")
    // age = Number.parseInt(age)
    // if (age>65){
    //     throw new SyntaxError("Mushkil hai...💀")
    // }
    

}catch(error){
    console.log(error.name)
    console.log(error.message)
    // console.log(j)
    // console.log(error.stack)
}

finally{
console.log("Waqt nikal raha hai teraa...---")}