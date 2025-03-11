const button = document.getElementById("button");
button.addEventListener("click", () => {
  showhide();
});
const showhide = () => {
  let article = document.querySelector("article");
  if (!article) {
    let newArticle = document.createElement("article");
    newArticle.textContent =
      "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(newArticle);
  } else if (article.style.visibility == "hidden") {
    article.style.visibility = "visible";
  } else article.style.visibility = "hidden";
};
