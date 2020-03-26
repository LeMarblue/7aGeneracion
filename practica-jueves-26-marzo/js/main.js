
var kodersArray = []
// Saca la informacion del koder desde los inputs y regresa un objeto koder
function insertKoderToArray() {
    let koderName = document.getElementById("koder-name").value
    let koderPhone = document.getElementById("koder-phone").value
    let koderEmail = document.getElementById("koder-email").value
    kodersArray.push({ koderName, koderPhone, koderEmail })
}

// agrega la funcionalidad al boton de save koder 
function addButtonSaveListener() {
    let saveKoderButton = document.getElementById("btn-save-koder")
    saveKoderButton.addEventListener("click", (event) => {
        insertKoderToArray()
        console.log(kodersArray)
        printKoderTable(kodersArray)
    })
}
addButtonSaveListener()

//me pinta mi tabla y me la inserta en el html,
function printKoderTable(array) {
    document.getElementById("table-wrapper").innerHTML = ""
    array.forEach((koder, index) => {
        let koderName = koder.koderName
        let koderPhone = koder.koderphone
        let koderEmail = koder.koderEmail
        let currentContent = document.getElementById("table-wrapper").innerHTML
        let newContent = `
        <tr>
      <th scope="row">${index}</th>
      <td>${koderName}</td>
      <td>${koderPhone}</td>
      <td>${koderEmail}</td>
      <td class="btn btn-danger btn-delate" data-btn-delete-index="${index}">X</td>
    </tr>
        `
        document.getElementById("table-wrapper").innerHTML = currentContent + newContent
    })

    addDeletedButtonListener()
}
//le agrega la funcionalidad a mi boton de delete
function addDeletedButtonListener() {
    let deletedButtons = document.getElementsByClassName("btn-delate")
    let i
    for (i = 0; i < deletedButtons.length; i++) {
        deletedButtons[i].addEventListener("click", (event) => {
            let koderIndex = event.target.dataset.btnDeleteIndex
            kodersArray.splice(koderIndex, 1)
            printKoderTable(kodersArray)
        })
    }
}
