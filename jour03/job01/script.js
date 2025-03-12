$("#buttonQuery").click(function () {
  rajout();
});
const rajout = () => {
  let txt = $("<p></p>").text(
    "Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie."
  );
  let btn = $("<button id='btnHidden'></button>");
  $("body").append(txt, btn);
};
$("body").on("click", "#btnHidden", function () {
  poufHtml();
});
const poufHtml = () => {
  $("p").remove();
  $("#btnHidden").remove();
};
