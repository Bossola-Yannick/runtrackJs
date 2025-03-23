// récupération liste des étudients
let studentsList = JSON.parse(sessionStorage.getItem("users"));
let userConnect = JSON.parse(sessionStorage.getItem("userConnect"));
console.log(typeof userConnect);

if (!userConnect) {
  document.location.href = "./404.html";
}
if (userConnect.role !== "admin" && userConnect.role !== "super-admin") {
  document.location.href = "./404.html";
}

// récupération du nom de l'utilisateur connecté
$("#name").text(userConnect.nom);
// affichage liste des étudients
for (student of studentsList) {
  // déclararion des éléments à insérer
  let card = $("<div></div>").attr({ class: "card" });
  let cardBody = $("<div></div>").attr({
    class: "card-body row justify-content-around",
  });
  let cardTitle = $("<h4></h4>")
    .text(student.nom)
    .attr({ class: "card-title col-xl-1 row-sm" });
  let cardSubTitle = $("<h5></h5>")
    .text(student.prenom)
    .attr({ class: "card-title col-xl-1" });
  let cardRole = $("<p></p>")
    .text(student.role)
    .attr({ class: "card-title col-xl-1" });
  let cardDate = $("<p></p>")
    .text(student.date)
    .attr({ class: "card-title col-xl-4" });
  let btnValDate = $("<button></button>").text("Valider").attr({
    class: "btn btn-success col-xl-2 text-end btnValDate",
    type: "submit",
    value: student.nom,
  });
  let btnDelDate = $("<button></button>").text("Supprimer").attr({
    class: "btn btn-warning col-xl-2 text-end btnDelDate",
    type: "submit",
    value: student.nom,
  });
  let grpButton = $("<div></div>").attr({ role: "group", class: "col-xl-2" });

  let btnAdmin = $("<button></button>").text("Admin").attr({
    class: "btn btn-warning text-end btnAdmin",
    type: "submit",
    value: student.nom,
  });
  let btnStudent = $("<button></button>").text("étudiant").attr({
    class: "btn btn-primary  text-end btnStudent",
    type: "submit",
    value: student.nom,
  });

  let btnDelete = $("<button></button>").text("Supprimer").attr({
    class: "btn btn-danger col-xl-1 col-sm-3 text-end btnDelete",
    type: "submit",
    value: student.nom,
  });
  if (userConnect.role === "admin") {
    if (student.role !== "student") {
      btnStudent
        .text("####")
        .removeClass("btnStudent")
        .attr({ value: "Null", type: "button" });
      btnAdmin
        .text("####")
        .removeClass("btnAdmin")
        .attr({ value: "Null", type: "button" });
      btnDelete
        .text("####")
        .removeClass("btnDelete")
        .attr({ value: "Null", type: "button" });
    }
  }
  if (userConnect.role === "super-admin") {
    if (student.role !== "student" && student.role !== "admin") {
      btnStudent
        .text("####")
        .removeClass("btnStudent")
        .attr({ value: "Null", type: "button" });
      btnAdmin
        .text("####")
        .removeClass("btnAdmin")
        .attr({ value: "Null", type: "button" });
      btnDelete
        .text("####")
        .removeClass("btnDelete")
        .attr({ value: "Null", type: "button" });
    }
  }

  // insertion des éléments créer entre eux

  cardBody.append(grpButton);
  grpButton.append(btnStudent);
  grpButton.append(btnAdmin);
  cardBody.append(cardTitle);
  cardBody.append(cardSubTitle);
  cardBody.append(cardRole);
  cardBody.append(cardDate);
  if (student.date) {
    cardDate.append(btnValDate);
    cardDate.append(btnDelDate);
  }
  cardBody.append(btnDelete);
  card.append(cardBody);
  // mise en place sur le DOM
  $("#containerStudents").append(card);
}

$(".btnAdmin").click(function (e) {
  let val = e.target.value;
  let target = studentsList.find((student) => student.nom === val);
  if (target) {
    target.role = "admin";
    delete target.date;
  }
  sessionStorage.setItem("users", JSON.stringify(studentsList));
  document.location.href = "./admin.html";
});
$(".btnStudent").click(function (e) {
  let val = e.target.value;
  let target = studentsList.find((student) => student.nom === val);
  if (target) {
    target.role = "student";
    delete target.date;
  }
  sessionStorage.setItem("users", JSON.stringify(studentsList));
  document.location.href = "./admin.html";
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
