const jsonString =
  '{"name":"la Plateforme", "address":"8 rue hozier", "city":"Marseille"}';
const key = "city";

const jsonValueKey = (jsonString, key) => {
  try {
    const jsonObject = JSON.parse(jsonString);
    return jsonObject[key];
  } catch (error) {
    console.error("Erreur de parsing JSON :", error);
    return null;
  }
};

const value = jsonValueKey(jsonString, key);
console.log(value);
