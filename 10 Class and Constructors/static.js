class Name {
    constructor(name){
        this.name = Name.capitalize(name)
    }
    walk(){
        alert("Janwar " + this.name + " is jogging!") 
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
}

j = new Name("azhar")
j.walk()