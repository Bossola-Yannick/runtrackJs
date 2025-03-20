$("#connexion").submit(function (e) {
  e.preventDefault();
  // récupération des valeurs du formulaire et traitement
  let email = $("#email").val().trim();
  let password = $("#password").val().trim();
  if (verifMail) {
    if (!password || !email) {
      $("#connexionMessage")
        .text("Mot de passe ou Email non renseigné !")
        .css("color", "red");
    } else
      $("#connexionMessage").text("Connexion Réussi !").css("color", "green");
  } else $("#connexionMessage").text("Connexion Echoué !").css("color", "red");
});
