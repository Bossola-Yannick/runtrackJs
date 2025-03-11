let position = 0;

window.addEventListener("scroll", (e) => {
  position = window.scrollY;
  chargement(position);
  console.log(position);
});

const chargement = (nivCharg) => {
  let maxCharg = 3427;
  let charg = (parseInt(nivCharg) * 100) / maxCharg;
  let barCharg = document.getElementById("chargement");
  barCharg.style.width = charg + "%";
  console.log(charg);
};
