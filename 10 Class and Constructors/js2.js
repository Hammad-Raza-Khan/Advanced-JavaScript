class Animal {
    constructor(name, colour) {
        this.name = name
        this.colour = colour
    }

    run() {
        console.log(this.name + " is bhaaging")
    }
    shout() {
        console.log("abe " + this.name + " of " + this.colour + " kyu thaak riya hai...?")

    }

}

class MOnkey extends Animal {
    constructor(name){
        super(name)
        console.log("hihihihzhahahah")
    }
    doing() {
        
        console.log("Ama " + this.name + " kya krrao?!")
    }
}

let a = new Animal("Janwar", "Red")
let b = new MOnkey("Janwar")