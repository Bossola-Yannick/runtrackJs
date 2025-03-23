import { passwordIdentique } from "./verifInput.js";
import { regexMail } from "./verifInput.js";
let getAllUserList = JSON.parse(sessionStorage.getItem("users"));

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
      .css("color", "red")
      .attr({ class: "text-center" });
    return;
  }
  // vérification de l'adresse mail
  if (!regexMail.test(email)) {
    $("#statusInscription")
      .text("Veuilez vous inscrire avec l'adresse mail de la plateforme !")
      .css("color", "red")
      .attr({ class: "text-center" });
    return;
  }
  // verification si utilisateur déjà présent (adresse mail unique)
  let user = getAllUserList.find((u) => u.email === email);
  if (user) {
    $("#statusInscription")
      .text(
        "Vous avez déjà un compte, si vous avez oublié le mot de passe rapprochez vous de votre accompagnateur !"
      )
      .css("color", "red")
      .attr({ class: "text-center" });
    return;
  }

  // Vérification des mots de passe
  if (passwordIdentique) {
    let newUser = {
      nom: nom,
      email: email,
      prenom: prenom,
      code_postale: codeP,
      mot_de_passe: password,
      role: role,
    };
    //mise a jour de la liste utilisateur
    getAllUserList.push(newUser);
    // Mettre à jour sessionStorage
    sessionStorage.setItem("users", JSON.stringify(getAllUserList));
    document.location.href = "./connexion.html";
  }
});
