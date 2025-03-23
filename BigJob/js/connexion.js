import { verifMail } from "./verifInput.js";
let role;
// récupération de la liste des utilisateur dans le local Storage
let getAllUserList = JSON.parse(sessionStorage.getItem("users")) || [];
$("#connexion").submit(function (e) {
  e.preventDefault();
  // récupération des valeurs du formulaire et traitement
  let email = $("#email").val().trim();
  let password = $("#password").val().trim();
  console.log(email);
  console.log(password);

  if (!password || !email) {
    $("#connexionMessage")
      .text("Mot de passe ou Email non renseigné !")
      .css("color", "red");
    return;
  }

  // Vérification des informations de connexion
  let user = getAllUserList.find(
    (u) => u.email === email && u.mot_de_passe === password
  );
  console.log(user);

  // vérification si utilisateur dans la base de donnée
  if (!user) {
    $("#connexionMessage")
      .text("Email ou mot de passe incorrect !")
      .css("color", "red");
    return;
  }

  sessionStorage.setItem(
    "userConnect",
    JSON.stringify({ nom: user.nom, role: user.role })
  );
  console.log(sessionStorage.getItem("userConnect"));
  role = user.role;

  // redirection en fonction du role de l'utilisateur connecté
  if (role == "admin" || role === "super-admin") {
    document.location.href = "./admin.html";
    console.log(role);
  } else if (role == "student") {
    console.log(role);
    document.location.href = "./students.html";
  } else {
    document.location.href = "./404.html";
    console.log(role);
  }
});
