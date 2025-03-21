// mise en place d'une "déconnexion"
if (localStorage.getItem("userConnect")) {
  $("#linkConnexion").text("Déconnection").attr({ id: "logout", href: "#" });
}
