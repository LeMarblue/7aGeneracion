fetchKoders()

function getKoderInfo() {
    let koderName = $("#koder-name").value
    let koderPhone = $("#koder-phone").value
    let koderEmail = $("#koder-email").value
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
                console.log(response)
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
            let parsedResponse = JSON.parse(response)
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
    </tr>
        `
        $("#table-wrapper").html(currentContent + newContent)
    }
    addDeletedButtonListener()
}
function addDeletedButtonListener() {
    let deletedButtons = $("#btn-delate")
    deletedButtons.click((event) => {
        let koderHash = event.target.dataset.btnDeleteHash
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
