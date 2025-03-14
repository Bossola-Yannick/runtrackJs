async function fetchUser() {
  try {
    let response = await fetch("./utilisateur.json");
    if (!response.ok) {
      throw new Error("Erreur chemin !");
    }
    let getUser = await response.json();
    return getUser;
  } catch (error) {
    console.log("Erreur : ".error);
  }
}

//selection du bouton update
$("#update").click(function () {
  // traitement des donnée pour les insérer dans le tableau
  fetchUser().then((data) => {
    if (data) {
      console.log(data);
      for (let user of data) {
        let tbody = $("#tbody");
        let rows = $('<tr id="row"></tr>');
        tbody.append(rows);
        let firstname = $("<td></td>").text(user.lastname);
        let lastname = $("<td></td>").text(user.firstname);
        let mail = $("<td></td>").text(user.mail);
        rows.append(firstname, lastname, mail);
      }
    }
  });
});
