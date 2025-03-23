// mise en place d'une "déconnexion"
if (sessionStorage.getItem("userConnect")) {
  $("#linkConnexion").text("Déconnection").attr({ id: "logout", href: "#" });
  $("#linkInscription").text("Profil").attr({ id: "profil" });
}
$("#profil").click(function () {
  let user = JSON.parse(sessionStorage.getItem("userConnect"));
  if (user.role === "student") {
    $("#profil").attr({ href: "./pages/students.html" });
  } else if (user.role === "admin" || user.role === "super-admin") {
    $("#profil").attr({ href: "./pages/admin.html" });
  } else $("#profil").attr({ href: "./pages/404.html" });
});

$("#logout").click(function () {
  sessionStorage.removeItem("userConnect");
  if (window.location.href === "http://127.0.0.1:5500/BigJob/index.html") {
    document.location.href = "./index.html";
  } else document.location.href = "../index.html";
});
