export let user;
export async function fetchUser() {
  try {
    let response = await fetch("./assets/data/data.json");
    if (!response.ok) {
      throw new Error("Erreur chemin !");
    }
    let getUser = await response.json();
    return getUser;
  } catch (error) {
    console.log("Erreur : ".error);
  }
}
// Fonction pour récupérer et assigner les données à `user`
export async function getAllUser() {
  user = await fetchUser();
  if (user) {
    return user;
  } else {
    console.log("Aucune donnée reçue.");
  }
}

// mise en sessionStorage de mes Data Utilisateur
let getAllUserList;
// Charger les utilisateurs existants
if (!sessionStorage.getItem("users")) {
  getAllUser().then((data) => {
    if (data) {
      let getAllUserList = data; // Assigner les données utilisateur
      console.log("Utilisateurs chargés :", getAllUserList);
      sessionStorage.setItem("users", JSON.stringify(getAllUserList));
    } else {
      console.log("pas de données");
    }
  });
} else getAllUserList = JSON.parse(sessionStorage.getItem("users"));
