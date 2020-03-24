var kodersArray = [
]
const saveKoder = () => {
  let koderName = document.getElementById("koder-name").value;
  let koderLastName = document.getElementById("koder-last-name").value;
  let koderDeliveredPractices = document.getElementById("koder-delivered-practices").value;
  let koderAssistances = document.getElementById("koder-assistances").value;

  let koderObject = { koderName, koderLastName, koderDeliveredPractices, koderAssistances }

  console.log(koderObject)
  kodersArray.push(koderObject);
  printKoders();
  cards();
  assignDeleteButtonListener()
}
const printKoders = () => {
  document.getElementById("koders-wrapper").innerHTML = ""
  kodersArray.forEach((koder, index) => {
    let koderFullName = koder.koderName + " " + koder.koderLastName;
    let koderAssistances = koder.koderAssistances;
    let koderDeliveredPractices = koder.koderDeliveredPractices;
    let currentContent = document.getElementById("koders-wrapper").innerHTML;
    let newContent = `
            <tr id='koder-${index}'>
                <td>${index + 1}</td>
                <td><span class="text-uppercase">${koderFullName}</span></td>
                <td>${koderAssistances}</td>
                <td>${koderDeliveredPractices}</td>
                <td>
                    <div class='btn btn-danger' data-koder-index="${index}">Eliminar</div>
                </td>
            </tr>
            `
    document.getElementById("koders-wrapper").innerHTML = currentContent + newContent;
  })
}

var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click", saveKoder)




const cards = () => {
  document.getElementById("kodersCard").innerHTML = ""
  kodersArray.forEach((koder, index) => {
    let koderFullName = koder.koderName + " " + koder.koderLastName;
    let koderAssistances = koder.koderAssistances;
    let koderDeliveredPractices = koder.koderDeliveredPractices;
    let currentCard = document.getElementById("kodersCard").innerHTML
    let newCard = `
         <div class="col-12 col-md-3">
        <div class="card mt-3">
            <div class="card-body">
              <h5 class="card-title" id= "name-koder"> Nombre: ${koderFullName}</h5>
          
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id= "practices"> Número de prácticas:${koderDeliveredPractices}</li>
              <li class="list-group-item" id="assistances"> Número de asistencias:${koderAssistances}</li>
            </ul>
           
              <div class="btn btn-danger mt-3 btn-block" id="btn-delete-koder" data-koder-index="${index}">Eliminar</div>
            </div>
        </div>
    </div>
    `
    document.getElementById("kodersCard").innerHTML = currentCard + newCard;

  })
}
var saveKoderBtn = document.getElementById("submit-button");
saveKoderBtn.addEventListener("click", saveKoder)

const assignDeleteButtonListener = () => {
  var removeButton = document.getElementsByClassName("btn-danger")
  var i
  for (i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", (event) => {
      let koderIndex =
        event.target.dataset.koderIndex
      kodersArray.splice(koderIndex, 1)
      printKoders()
      cards()
      assignDeleteButtonListener()


    })

  }
}
