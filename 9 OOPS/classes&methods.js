class attendance {
    Present() {
        alert("lg gyi "+ this.name + " who is from " + this.state); 
    }
    Absent(){
        alert("Nhi lgi "+ this.name + " who is from " + this.state)
    }
    fill_details(name, state){
        this.name = name;
        this.state = state
    }
}

let Hammad = new attendance()
let EB = new attendance()


Hammad.fill_details("Hammad", 22)
EB.fill_details("E.B", 17)


Hammad.Present()
EB.Absent()
