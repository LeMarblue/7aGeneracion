
var kodersArray = []
// Saca la informacion del koder desde los inputs y regresa un objeto koder
function insertKoderToArray() {
    let koderName = $("#koder-name").val()
    let koderPhone = $("#koder-phone").val()
    let koderEmail = $("#koder-email").val()
    kodersArray.push({ koderName, koderPhone, koderEmail })
}

// agrega la funcionalidad al boton de save koder 
function addButtonSaveListener() {
    let saveKoderButton = $("#btn-save-koder")
    saveKoderButton.click((event) => {
        console.log("jmn")
        insertKoderToArray()
        console.log(kodersArray)
        printKoderTable(kodersArray)
    })
}
addButtonSaveListener()

//me pinta mi tabla y me la inserta en el html,
function printKoderTable(array) {
    $("#table-wrapper").html("")
    array.forEach((koder, index) => {
        let koderName = koder.koderName
        let koderPhone = koder.koderPhone
        let koderEmail = koder.koderEmail
        let currentContent = $("#table-wrapper").html()
        let newContent = `
        <tr>
      <th scope="row">${index}</th>
      <td>${koderName}</td>
      <td>${koderPhone}</td>
      <td>${koderEmail}</td>
      <td class="btn btn-danger btn-delate" data-btn-delete-index="${index}">X</td>
    </tr>
        `
        $("#table-wrapper").html(currentContent + newContent)
    })

    addDeletedButtonListener()
}
//le agrega la funcionalidad a mi boton de delete
function addDeletedButtonListener() {
    let deletedButtons = $(".btn-delate")
    deletedButtons.click((event) => {
        let koderIndex = event.target.dataset.btnDeleteIndex
        kodersArray.splice(koderIndex, 1)
        printKoderTable(kodersArray)
    })

}
