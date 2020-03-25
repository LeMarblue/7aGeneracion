function getKoderInfo() {
    let koderName = document.getElementById("koder-name").value
    let koderPhone = document.getElementById("koder-phone").value
    let koderEmail = document.getElementById("koder-email").value
    return { koderName, koderPhone, koderEmail }
}
