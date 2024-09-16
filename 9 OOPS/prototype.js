let a = {
    name: "Hammad Raza Khan",
    hobby: "Shayari"
}

let p = {
    run : () => {
        alert("run")
    }
}

a.__proto__ = p;
a.run()