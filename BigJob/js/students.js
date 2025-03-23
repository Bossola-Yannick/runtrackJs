const monthName = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
const dayName = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
let userConnect = JSON.parse(sessionStorage.getItem("userConnect"));
if (!userConnect) {
  document.location.href = "./404.html";
}
$("#name").text(userConnect.nom);
function getDaysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
function createcalendar(month, year) {
  const calendar = document.querySelector("#calendar");
  calendar.innerHTML = "";

  let date = 1;
  const daysInMonth = getDaysInMonth(month + 1, year);
  for (let i = 0; i < 6; i++) {
    let week = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      if (
        (i === 0 && j < new Date(year, month, 1).getDay()) ||
        date > daysInMonth
      ) {
        let day = document.createElement("td");
        day.classList.add("tableStyle");
        week.appendChild(day);
      } else {
        let day = document.createElement("td");
        day.classList.add("tableStyle");
        day.innerText = date;
        week.appendChild(day);
        date++;
      }
    }
    calendar.appendChild(week);
  }
}

const currentDate = new Date();
let month = currentDate.getMonth();
let day = currentDate.getDate();
$("#month").text(monthName[month]);
createcalendar(currentDate.getMonth(), currentDate.getFullYear());
let dates = [];
$("#calendar").click(function (e) {
  chooseDate = e.target.innerText;
  if (chooseDate == "") {
    $("#info").text("Veuillez choisir une date valide !");
    $("#info").addClass("text-danger");
  } else if (chooseDate.length > 2) {
    $("#info").text(
      "Ne soyez pas trop gourmand, choisissez qu'une seule date à la fois !"
    );
    $("#info").addClass("text-danger");
  } else if (chooseDate < day) {
    $("#info").text(
      "Vous ne savez pas remonter le temps, il n'y a qu'un seul Marty McFly"
    );
    $("#info").addClass("text-danger");
  } else {
    $("#info").text(
      "Veuillez choisir la ou les dates auxquelles vous souhaitez être inscrit !"
    );
    $("#info").removeClass("text-danger");
    if (dates.includes(chooseDate)) {
      $("#info").text(
        "Date déjà sélectionnées, Tu ne maîtrises pas le Multi Clonage pour être présent DEUX fois ! "
      );
      $("#info").addClass("text-danger");
    } else {
      let datesSelected = $('<p class="col-1"=></p>').text(chooseDate);
      $("#listDatesSelected").append(datesSelected);
      dates.push(chooseDate);
      console.log(chooseDate);
      console.log(dates);
    }
  }
});

$("#valid").click(function () {
  // Récupérer les données du sessionStorage
  let userConnect = JSON.parse(sessionStorage.getItem("userConnect"));
  // Récupération des données dans users
  let users = JSON.parse(sessionStorage.getItem("users"));
  // Vérifier si les données existent
  if (users && Array.isArray(users)) {
    // Trouver l'utilisateur
    let connectUser = users.find((user) => user.nom === userConnect.nom);
    if (connectUser) {
      // Ajout des dates
      connectUser.date = dates;
      // Réenregistrer les données dans le sessionStorage
      sessionStorage.setItem("users", JSON.stringify(users));
    } else {
      console.log("Utilisateur non trouvé.");
    }
  } else {
    console.log("Aucune donnée trouvée dans le sessionStorage.");
  }
});
