let aButton = document.getElementById("august-field")
aButton.addEventListener("click", () => alert("Only August"))

let aForm = document.getElementById("august-form")
aForm.addEventListener("submit", (event) => createAugust(event.target))
let augusts = []

function createAugust(stuff){
    event.preventDefault()
    let age = document.getElementById("august-age")
    let x = new August(age.value)
    augusts.push(x)
    age.value = 0
    displayAugusts()
}

function August(age){
    this.age = age
    this.name = "August"
}

function displayAugusts(){
    let augustLand = document.getElementById("august-land")
    augustLand.innerHTML = ""
    let table = document.createElement("table")
    for(let i = 0; i < augusts.length; i++){
        let august = augusts[i]
        let row = document.createElement("tr")
        let name = document.createElement("td")
        name.innerText = august.name
        let age = document.createElement("td")
        age.innerText = august.age
        row.appendChild(name)
        row.appendChild(age)
        table.appendChild(row)
    }
    augustLand.appendChild(table)
}

