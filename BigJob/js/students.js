const moisNom = [
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
const jourNom = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
const dateSelected = new Set();
console.log(currentDate.getMonth());
$("#calendar").click(function (e) {
  choiseDate = e.target.innerText;
  dateSelected.add(choiseDate);

  console.log(choiseDate);
  console.log(dateSelected);
});
