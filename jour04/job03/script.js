let types = [];
async function fetchtype() {
  try {
    let response = await fetch("./pokemon.json");
    if (!response.ok) {
      throw new Error("Erreur chemin !");
    }
    let getType = await response.json();
    return getType;
  } catch (error) {
    console.log("Erreur : ".error);
  }
}

// traitement des donnée pour les insérer dans le select
fetchtype().then((data) => {
  if (data) {
    types = data.map((pokemon) => pokemon.type).flat();
    types = [...new Set(types)];
    let selectOption = $("#type");
    for (let type of types) {
      let option = $("<option></option>").text(type);
      selectOption.append(option);
    }
  }
});

// Gestionnaire d'événements pour le formulaire
$("#form").submit(function (e) {
  e.preventDefault();
  let formData = $(this).serializeArray();
  let id = formData[0].value;
  let name = formData[1].value;
  let type = formData[2].value;
  console.log(formData[0].value);
  console.log(formData[1].value);
  console.log(formData[2].value);
  search(id, name, type);
});

// récupérartion des pokemons en fonction des input de filtre
const search = async (id, name, type) => {
  // traitement des données pour affiché les pokemon en fonction de la sélection
  fetchtype().then((data) => {
    if (data) {
      for (const pokemon of data) {
        if (
          id == pokemon.id ||
          name == pokemon.name.french ||
          pokemon.type.includes(type)
        ) {
          let name = $("<h2></h2>").text(pokemon.name.french);
          let type = $("<h3></h3>").text(pokemon.type);
          let id = $("<p></p>").text(pokemon.id);
          $("body").append(name, type, id);
          console.log(pokemon);
        }
      }
    }
  });
};
//effacer la sélection
$("#delete").click(function (e) {
  $("h2").remove();
  $("h3").remove();
  $("p").remove();
});
