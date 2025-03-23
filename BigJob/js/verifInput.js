export let verifMail = false;
export let passwordIdentique = false;

$("document").ready(function () {
  const regexMail = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,5}$"
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

  // Vérification du format du mot de passe
  $("#password").on("input", function () {
    let password = $(this).val();
    if (regexPassword.test(password)) {
      $("#passwordError").text("Format Password Validé").css("color", "green");
    } else {
      $("#passwordError")
        .text(
          "Format Password requis : 1 Majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial"
        )
        .css("color", "red");
    }
  });

  // Vérification si les mots de passe sont identiques
  $("#confirmPassword").on("input", function () {
    let password = $("#password").val();
    let confirmPassword = $(this).val();
    if (password !== confirmPassword) {
      $("#identiquePasswordError")
        .text("Mot de Passe non identique !")
        .css("color", "red");
      passwordIdentique = false;
    } else {
      $("#identiquePasswordError")
        .text("Mot de Passe identique !")
        .css("color", "green");
      passwordIdentique = true;
    }
  });
});
