let verifMail = false;
let passwordIdentique = false;

$("document").ready(function () {
  const regexMail = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,10}$"
  );
  // regex pour password: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$
  const regexPassword = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{5,}$"
  );
  const regexCodeP = new RegExp("^\\d{5}$");
  // verif format email
  $("#email").on("input", function () {
    let mail = $(this).val();
    if (regexMail.test(mail)) {
      $("#emailError").text("Email valide").css("color", "green");
      verifMail = true;
      return verifMail;
    } else {
      $("#emailError").text("Format Email invalide").css("color", "red");
      verifMail = false;
      return verifMail;
    }
  });

  // verif format code Postal
  $("#codeP").on("input", function () {
    let codeP = $(this).val();
    if (regexCodeP.test(codeP)) {
      $("#codePostalError")
        .text(" Format Code postal Validé")
        .css("color", "green");
    } else $("#codePostalError").text("Format Code Postal invalide ! Veuillez mettre que les 5 chiffre de votre code postal.").css("color", "red");
  });

  // verif format password
  $("#password").on("input", function () {
    var password = $(this).val();
    if (regexPassword.test(password)) {
      $("#passwordError").text(" Format Password Validé").css("color", "green");
    } else $("#passwordError").text("Format Password requit: 1 Majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial").css("color", "red");
    // verif si password = verifPassword
    $("#confirmPassword").on("input", function () {
      let verifPassword = $(this).val();
      if (password != verifPassword) {
        $("#identiquePasswordError")
          .text("Mot de Passe non identique !")
          .css("color", "red");
      } else {
        $("#identiquePasswordError")
          .text("Mot de Passe identique !")
          .css("color", "green");
        passwordIdentique = true;
      }
    });
  });
});

$("#connexion").submit(function (e) {
  e.preventDefault();
  let formData = $(this).serializeArray();
  let mail = formData[0].value;
  let password = formData[1].value;
  if (verifMail) {
    if (password == "") {
      $("#connexionMessage")
        .text("Mot de passe non renseigné !")
        .css("color", "red");
    } else
      $("#connexionMessage").text("Connexion Réussi !").css("color", "green");
    console.log(mail);
    console.log(password);
  } else $("#connexionMessage").text("Connexion Echoué !").css("color", "red");
});

$("#inscription").submit(function (e) {
  e.preventDefault();
  let formData = $(this).serializeArray();
  let nom = formData[0].value;
  let prenom = formData[1].value;
  let email = formData[2].value;
  let adresse = formData[3].value;
  let codeP = formData[4].value;
  let password = formData[5].value;
  let verifPassword = formData[6].value;
  if (
    nom == "" ||
    prenom == "" ||
    email == "" ||
    adresse == "" ||
    codeP == "" ||
    password == "" ||
    verifPassword == ""
  ) {
    $("#statusInscription")
      .text("Veuillez remplir tous les champs !")
      .css("color", "red");
    return;
  }
  if (passwordIdentique) {
    $("#statusInscription").text("Inscription Validée !").css("color", "green");
    return;
  }
});

// regex pour email: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$
// regex pour password: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$
// regex code Postale: ^\d{5}$
