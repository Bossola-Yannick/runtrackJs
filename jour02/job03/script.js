const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  addOne();
});
const addOne = () => {
  let compteur = document.getElementById("compteur").innerHTML;
  let score = parseInt(compteur);
  score += 1;
  document.getElementById("compteur").textContent = score;
};
