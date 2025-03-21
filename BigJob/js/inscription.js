import { passwordIdentique } from "./verifInput.js";
let getAllUserList = JSON.parse(localStorage.getItem("users"));

$("#inscription").submit(function (e) {
  e.preventDefault();

  // Récupération des valeurs du formulaire
  let nom = $("#nom").val().trim();
  let prenom = $("#prenom").val().trim();
  let email = $("#email").val().trim();
  let codeP = $("#codeP").val().trim();
  let password = $("#password").val().trim();
  let confirmPassword = $("#confirmPassword").val().trim();
  let role = "student";

  // Vérification des champs vides
  if (!nom || !prenom || !email || !codeP || !password || !confirmPassword) {
    $("#statusInscription")
      .text("Veuillez remplir tous les champs CORRECTEMENT!")
      .css("color", "red");
    return;
  }

  // Vérification des mots de passe
  if (passwordIdentique) {
    $("#statusInscription").text("Inscription Validée !").css("color", "green");
    let newUser = {
      nom: nom,
      email: email,
      prenom: prenom,
      code_postale: codeP,
      mot_de_passe: password,
      role: role,
    };
    console.log("Nouvel utilisateur :", newUser);

    //mise a jour de la liste utilisateur
    getAllUserList.push(newUser);
    // Mettre à jour LocalStorage
    localStorage.setItem("users", JSON.stringify(getAllUserList));
    document.location.href = "./connexion.html";
  }
});

//^[a-zA-Z0-9._%+-]+@laplateforme\.io$
