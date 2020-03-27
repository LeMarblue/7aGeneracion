fetchKoders()

function getKoderInfo() {
    let koderName = $("#koder-name").val()
    let koderPhone = $("#koder-phone").val()
    let koderEmail = $("#koder-email").val()
    return { koderName, koderPhone, koderEmail }
}

function addButtonSaveListener() {
    let saveKoderButton = $("#btn-save-koder")
    saveKoderButton.click((event) => {
        let koderInfo = getKoderInfo()
        $.ajax({
            url: "https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/.json",
            method: "POST",
            data: JSON.stringify(koderInfo),
            success: (response) => {
                console.log('RES from POST:', response)
                fetchKoders()
            }
        })

    })
}
addButtonSaveListener()

function fetchKoders() {
    $.ajax({
        url: "https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/.json",
        method: "GET",
        success: (response) => {
            console.log('RES from GET', response)
            printKoderTable(response)
        }
    })
}

function printKoderTable(object) {
    $("#table-wrapper").empty()
    let hash
    let index = 0
    for (hash in object) {
        index++
        let koder = object[hash]
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
      <td class="btn btn-danger btn-delate" data-btn-delete-hash="${hash}">X</td>
      <td class="btn btn-warning btn-edit" data-btn-edit-hash"${hash}">EDIT</td>
    </tr>
        `
        $("#table-wrapper").html(currentContent + newContent)
    }
    addDeletedButtonListener()
}
function addDeletedButtonListener() {
    let deletedButtons = $(".btn-delate")
    deletedButtons.click(function (event) {
        let koderHash = $(this).data("btnDeleteHash")
        deleteKoder(koderHash)


    })

}
function deleteKoder(hash) {
    $.ajax({
        url: `https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/${hash}.json`,
        method: "DELETE",
        success: (response) => { fetchKoders() }

    })
}
