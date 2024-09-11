async function harry() {
    let delW = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("28 degree Celcius")
        }, 1000);
    })

    let bangW = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("33 degree Celcius")
        }, 2000);
    })

    console.log("Fetching,,,,rukja zara...")
    let d = await delW;
    console.log("LE! : " + d)

    console.log("Fetching,,,,rukja zara...")
    let b = await bangW;
    console.log("LE! : " + b)
    return [d, b]

    }


    const cherry= () => {
        console.log("Cherry mangta mere ku 🍒")
    }

    console.log("Welcome betaji, O babuji !")
    let a = harry()
    let c = cherry()
    a.then((ex)=>{
        console.log(ex)
    })