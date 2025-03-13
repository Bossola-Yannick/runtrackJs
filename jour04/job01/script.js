$("#button").click(function () {
  fetchExpr();
});

async function fetchExpr() {
  try {
    let response = await fetch("./expression.text");
    if (!response.ok) {
      throw new Error("Erreur chemin !");
    }
    let expression = await response.text();
    let txt = $("<p></p>").text(expression);
    $("body").append(txt);
  } catch (error) {
    console.log("Erreur : ".error);
  }
}
