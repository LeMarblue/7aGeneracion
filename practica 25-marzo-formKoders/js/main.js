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
        xhttp.open("POST", "https://javascript-ajax-d0ce6.firebaseio.com/marlene/koders/.json", true)
        xhttp.send(JSON.stringify(koderInfo))
    })
}
addButtonSaveListener()