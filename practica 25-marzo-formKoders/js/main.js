fetchKoders()

function getKoderInfo() {
    let koderName = document.getElementById("koder-name").value
    let koderPhone = document.getElementById("koder-phone").value
    let koderEmail = document.getElementById("koder-email").value
    return { koderName, koderPhone, koderEmail }
}

function addButtonSaveListener() {
    let saveKoderButton = document.getElementById("btn-save-koder")
    saveKoderButton.addEventListener("click", (event) => {
        let koderInfo = getKoderInfo()
        let xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                fetchKoders()
            }
        }
        xhttp.open("POST", "https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/.json", true)
        xhttp.send(JSON.stringify(koderInfo))

    })
}
addButtonSaveListener()

function fetchKoders() {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText)
            console.log(response)
            printKoderTable(response)
        }
    }
    xhttp.open("GET", "https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/.json", true)
    xhttp.send()
}

function printKoderTable(object) {
    document.getElementById("table-wrapper").innerHTML = ""
    let hash
    let index = 0
    for (hash in object) {
        index++
        let koder = object[hash]
        let koderName = koder.koderName
        let koderPhone = koder.koderPhone
        let koderEmail = koder.koderEmail
        let currentContent = document.getElementById("table-wrapper").innerHTML
        let newContent = `
        <tr>
      <th scope="row">${index}</th>
      <td>${koderName}</td>
      <td>${koderPhone}</td>
      <td>${koderEmail}</td>
      <td class="btn btn-danger btn-delate" data-btn-delete-hash="${hash}">X</td>
    </tr>
        `
        document.getElementById("table-wrapper").innerHTML = currentContent + newContent
    }
    addDeletedButtonListener()
}
function addDeletedButtonListener() {
    let deletedButtons = document.getElementsByClassName("btn-delate")
    let i
    for (i = 0; i < deletedButtons.length; i++) {
        deletedButtons[i].addEventListener("click", (event) => {
            let koderHash = event.target.dataset.btnDeleteHash
            deleteKoder(koderHash)

        })
    }
}
function deleteKoder(hash) {
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            fetchKoders()
        }
    }
    xhttp.open("DELETE", `https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/${hash}.json`, true)

    xhttp.send()
}