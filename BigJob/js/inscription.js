$("#inscription").submit(function (e) {
  e.preventDefault();
  // récupération des valeurs du formulaire et traitement
  let nom = $("#nom").val().trim();
  let prenom = $("#prenom").val().trim();
  let email = $("#email").val().trim();
  let codeP = $("#codeP").val().trim();
  let password = $("#password").val().trim();
  let confirmPassword = $("#confirmPassword").val().trim();
  if (!nom || !prenom || !email || !codeP || !password || !confirmPassword) {
    $("#statusInscription")
      .text("Veuillez remplir tous les champs CORRECTEMENT!")
      .css("color", "red");
    return;
  }
  if (passwordIdentique) {
    $("#statusInscription").text("Inscription Validée !").css("color", "green");
    console.log(nom, prenom, email, codeP, password, confirmPassword);
  }
});
