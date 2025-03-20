let user;
async function fetchUser() {
  try {
    let response = await fetch("../assets/data/data.json");
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
async function getAllUser() {
  user = await fetchUser();
  if (user) {
    console.log(user);
  } else {
    console.log("Aucune donnée reçue.");
  }
}
getAllUser();
console.log(user);

//fonction pour savoir si utilisateur enregistré
