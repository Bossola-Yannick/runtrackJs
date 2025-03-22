// récupération liste des étudients
let studentsList = JSON.parse(sessionStorage.getItem("users"));
let userConnect = JSON.parse(sessionStorage.getItem("userConnect"));
$("#name").text(userConnect.nom);
// affichage liste des étudients
for (student of studentsList) {
  // déclararion des éléments à insérer
  let card = $("<div></div>").attr({ class: "card" });
  let cardBody = $("<div></div>").attr({ class: "card-body row" });
  let cardTitle = $("<h4></h4>")
    .text(student.nom)
    .attr({ class: "card-title col-2" });
  let cardSubTitle = $("<h5></h5>")
    .text(student.prenom)
    .attr({ class: "card-title col-2" });
  let cardRole = $("<p></p>")
    .text(student.role)
    .attr({ class: "card-title col-2" });
  let cardDate = $("<p></p>")
    .text(student.date)
    .attr({ class: "card-title col-4" });
  let btnValDate = $("<button></button>").text("Valider").attr({
    class: "btn btn-success col-2 text-end btnValDate",
    type: "submit",
    value: student.nom,
  });
  let btnDelDate = $("<button></button>").text("Supprimer").attr({
    class: "btn btn-warning col-2 text-end btnDelDate",
    type: "submit",
    value: student.nom,
  });
  let btnUpdate = $("<button></button>").text("Modifier").attr({
    class: "btn btn-primary col-1 text-end btnUpdate",
    type: "submit",
    value: student.nom,
  });
  let btnDelete = $("<button></button>").text("Supprimer").attr({
    class: "btn btn-danger col-1 text-end btnDelete",
    type: "submit",
    value: student.nom,
  });

  // insertion des éléments créer entre eux
  if (student.role !== "admin") {
    cardBody.append(cardTitle);
    cardBody.append(cardSubTitle);
    cardBody.append(cardRole);
    cardBody.append(cardDate);
    if (student.date) {
      cardDate.append(btnValDate);
      cardDate.append(btnDelDate);
    }
    cardBody.append(btnUpdate);
    cardBody.append(btnDelete);
    card.append(cardBody);
    // mise en place sur le DOM
    $("#containerStudents").append(card);
  }
}

$(".btnUpdate").click(function (e) {
  let val = e.target.value;
  console.log(val);
});
$(".btnDelete").click(function (e) {
  console.log(studentsList);
  let val = e.target.value;
  let target = studentsList.findIndex((student) => student.nom === val);
  if (target !== -1) {
    studentsList.splice(target, 1);
  }
  sessionStorage.setItem("users", JSON.stringify(studentsList));
  document.location.href = "./admin.html";
});
$(".btnDelDate").click(function (e) {
  console.log(studentsList);
  let val = e.target.value;
  let target = studentsList.find((student) => student.nom === val);
  if (target) {
    delete target.date;
  }
  sessionStorage.setItem("users", JSON.stringify(studentsList));
  document.location.href = "./admin.html";
});
$(".btnValDate").click(function (e) {
  let val = e.target.value;
  let target = studentsList.find((student) => student.nom === val);
  if (target) {
    target.validDate = target.date;
    delete target.date;
  }
  sessionStorage.setItem("users", JSON.stringify(studentsList));
  document.location.href = "./admin.html";
});
